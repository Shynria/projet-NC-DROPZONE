import { Component, OnInit } from '@angular/core';
import { AffichageService } from '../affichage.service';
import { InscriptionService } from '../inscription.service';
import { ParachutisteService } from '../parachutiste.service';
import { SautTandemService } from '../saut-tandem.service';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {
  volsEnCours: any = [];
  sauts: any = [];
  volsEnAttente : any = [];
  sautsTandem: any = [];

  constructor(private srvAffichage: AffichageService, private srvSaut : InscriptionService, private srvVol: AffichageService, private srvSautTandem: SautTandemService) {
    this.refresh();
    this.refresh2();
  }

  ngOnInit(): void {
  }

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
  }

  refresh2() {
    this.srvVol.findAllByNonTermineNonIncident().subscribe(v => {
      this.volsEnAttente = v;
      for(let vol of this.volsEnAttente) {
        vol.placeLibre = vol.avion.capacite - 1 ; // -1 pour le responsable de vol
        for(let saut of vol.sauts) {
          vol.placeLibre -= saut.parachutistes.length;
        }
      }
    });

    this.srvSaut.findAllNoVol().subscribe(s => {
      this.sauts = s;
    });

    this.srvSautTandem.findAllNoVol().subscribe(s => {
      this.sautsTandem = s;
    })

  }

}
