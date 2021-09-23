import { Component, OnInit } from '@angular/core';
import { AffichageService } from '../affichage.service';
import { InscriptionService } from '../inscription.service';
import { ParachutisteService } from '../parachutiste.service';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {
  vols: any = [];
  vols2: any = [];
  sauts: any = [];
  volsEnAttente : any = []

  constructor(private srvAffichage: AffichageService, private srvSaut : InscriptionService, private srvVol: AffichageService) {
    this.refresh();
    this.refresh2();
  }

  ngOnInit(): void {
  }

  refresh = () => this.vols = this.srvAffichage.findAllByEtatVol("EN_VOL");

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

  }

}
