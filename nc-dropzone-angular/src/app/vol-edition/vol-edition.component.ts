import { Component, OnInit, ViewChild } from '@angular/core';
import { AffichageService } from '../affichage.service';
import { AvionService } from '../avion.service';
import { InscriptionService } from '../inscription.service';
import { ParachutisteService } from '../parachutiste.service';
import { PiloteService } from '../pilote.service';

@Component({
  selector: 'app-vol-edition',
  templateUrl: './vol-edition.component.html',
  styleUrls: ['./vol-edition.component.css']
})
export class VolEditionComponent implements OnInit {

  constructor(
      private srvVol : AffichageService,
      private srvAvion : AvionService,
      private srvPilote : PiloteService,
      private srvSaut: InscriptionService,
      private srvParachutiste: ParachutisteService
  ) { 
    this.refresh();
  }

  ngOnInit(): void {
  }

  sauts : any = []

  volsEnCours : any = [];
  volsEnAttente : any = [];

  avions : any = [];
  pilotes : any = [];
  parasConfirm: any = [];

  formVol = this.initVol();

  @ViewChild('modal') modal: any;
  modalTitre : string = "pas de titre";
  edition: boolean = false; // si false => creation, si true modification

  refresh = () => {
    this.srvVol.findAllByEtatVol("EN_VOL").subscribe(v => {
      this.volsEnCours = v;
      for(let vol of this.volsEnCours) {
        vol.nbPara = 1;
        for(let saut of vol.sauts) {
          vol.nbPara += saut.parachutistes.length;
        }
      }
    });
    this.srvVol.findAllByNonTermineNonIncident().subscribe(v => { 
      this.volsEnAttente = v;
      for(let vol of this.volsEnAttente) {
        vol.placeLibre = vol.avion.capacite - 1 ; // -1 pour le responsable de vol
        for(let saut of vol.sauts) {
          vol.placeLibre -= saut.parachutistes.length;
        }
      }
    });

    this.srvAvion.findAll().subscribe(a => this.avions = a);
    this.srvPilote.findAll().subscribe(p => this.pilotes = p);
    this.srvParachutiste.findAllByNiveau("CONFIRME").subscribe(p => this.parasConfirm = p);

    this.srvSaut.findAllNoVol().subscribe(s => { 
      this.sauts = s;
    });
  }

  ajouterVol() {
    this.modal.close();
    this.srvVol.add(this.formVol).subscribe(this.refresh);
  }

  ajouterVolModal() {
    this.formVol = this.initVol();
    this.modalTitre = "Ajouter un vol";
    this.edition = false;
    this.modal.open();
  }

  supprimerVol(vol: any) {
    this.srvVol.delete(vol).subscribe(this.refresh);
  }

  modifierVol() {
    this.modal.close();
    this.srvVol.update(this.formVol).subscribe(this.refresh);
  }

  modifierVolModal(vol: any) {
    this.formVol = Object.assign({}, vol);
    this.modalTitre = "Modifier un vol";
    this.edition = true;
    this.modal.open();
  }

  sautSelector: any = [
    {id: "", volId: ""}
  ]; 

  onChange(volId: any, saut: any) {
    for(let vol of this.volsEnAttente) {
      if( vol.id == volId) {
        vol.sauts.push(saut);
        this.srvVol.update(vol).subscribe(this.refresh);
      }
    }
  }

  initVol() {
    return {
      etatVol: "EN_ATTENTE",
      avion : {id: ""},
      pilote: {id: ""},
      sauts: [],
      responsableVol: {id: ""},
      placeLibre : ""
    };
  }
}
