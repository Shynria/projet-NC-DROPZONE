import { Component, OnInit, ViewChild } from '@angular/core';
import { AffichageService } from '../affichage.service';
import { AvionService } from '../avion.service';
import { InscriptionService } from '../inscription.service';
import { ParachutisteService } from '../parachutiste.service';
import { PiloteService } from '../pilote.service';
import { SautTandemService } from '../saut-tandem.service';

@Component({
  selector: 'app-vol-edition',
  templateUrl: './vol-edition.component.html',
  styleUrls: ['./vol-edition.component.css']
})
export class VolEditionComponent implements OnInit {

  constructor(
    private srvVol: AffichageService,
    private srvAvion: AvionService,
    private srvPilote: PiloteService,
    private srvSaut: InscriptionService,
    private srvParachutiste: ParachutisteService,
    private srvSautTandem: SautTandemService
  ) {
    this.refresh();
  }

  ngOnInit(): void {
  }

  sauts: any = [];
  sautsTandem: any = [];

  volsEnCours: any = [];
  volsEnAttente: any = [];

  avions: any = [];
  pilotes: any = [];
  parasConfirm: any = [];

  formVol = this.initVol();

  @ViewChild('modal') modal: any;
  modalTitre: string = "pas de titre";
  edition: boolean = false; // si false => creation, si true modification

  isError = false;
  error = "";

  refresh = () => {
    this.srvVol.findAllByEtatVol("EN_VOL").subscribe(v => {
      this.volsEnCours = v;
      for (let vol of this.volsEnCours) {
        vol.nbPara = 1;
        for (let saut of vol.sauts) {
          vol.nbPara += saut.parachutistes.length;
        }
        for (let saut of vol.sautsTandem) {
          if( saut.videoman ) {
            vol.nbPara += 3;
          } else {
            vol.nbPara += 2;
          }
        }
      }
    });
    this.srvVol.findAllByNonTermineNonIncident().subscribe(v => {
      this.volsEnAttente = v;
      for (let vol of this.volsEnAttente) {
        vol.placeLibre = vol.avion.capacite - 1; // -1 pour le responsable de vol
        for (let saut of vol.sauts) {
          vol.placeLibre -= saut.parachutistes.length;
        }
        for (let saut of vol.sautsTandem) {
          if( saut.videoman ) {
            vol.placeLibre -= 3;
          } else {
            vol.placeLibre -= 2;
          }
        }
      }
    });

    this.srvAvion.findAll().subscribe(a => this.avions = a);
    this.srvPilote.findAll().subscribe(p => this.pilotes = p);
    this.srvParachutiste.findAllByNiveau("CONFIRME").subscribe(p => this.parasConfirm = p);

    this.srvSaut.findAllNoVol().subscribe(s => {
      this.sauts = s;
    });

    this.srvSautTandem.findAllNoVol().subscribe(s => {
      this.sautsTandem = s;
    })
  }

  ajouterVol() {
    this.modal.close();
    this.srvVol.add(this.formVol).subscribe(this.refresh);
  }

  ajouterVolModal() {
    this.isError = false;
    this.formVol = this.initVol();
    this.modalTitre = "Ajouter un vol";
    this.edition = false;
    this.modal.open();
  }

  supprimerVol(vol: any) {
    this.srvVol.delete(vol).subscribe(this.refresh);
  }

  terminerVol(vol: any) {
    vol.etatVol = "TERMINE";
    this.srvVol.update(vol).subscribe(this.refresh);
  }

  modifierVol() {
    this.srvVol.update(this.formVol)
      .subscribe((res: any) => {
        if( res.msg == "true") {
          this.refresh();
          this.modal.close();
          this.isError = false;
        } else {
          this.isError = true;
          this.error = res.msg;
        }
      });
  }

  modifierVolModal(vol: any) {
    this.isError = false;
    this.formVol = Object.assign({}, vol);
    this.modalTitre = "Modifier un vol";
    this.edition = true;
    this.modal.open();
  }

  onChange(volId: any, saut: any) {
    for (let vol of this.volsEnAttente) {
      if (vol.id == volId) {
        vol.sauts.push(saut);
        this.srvVol.update(vol).subscribe(this.refresh);
      }
    }
  }

  onChangeTandem(volId: any, saut: any) {
    for (let vol of this.volsEnAttente) {
      if (vol.id == volId) {
        vol.sautsTandem.push(saut);
        this.srvVol.update(vol).subscribe(this.refresh);
      }
    }
  }

  supprimerSaut(saut :any) {
    this.srvSaut.delete(saut).subscribe(this.refresh);
  }
  
  supprimerSautTandem(saut :any) {
    this.srvSautTandem.delete(saut).subscribe(this.refresh);
  }

  initVol() {
    return {
      etatVol: "EN_ATTENTE",
      avion: { id: "" },
      pilote: { id: "" },
      sauts: [],
      sautsTandem: [],
      responsableVol: { id: "" },
      placeLibre: ""
    };
  }
}
