import { Component, OnInit } from '@angular/core';
import { AffichageService } from '../affichage.service';
import { ParachutisteService } from '../parachutiste.service';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {
  vols: any = [];
  parachutistes: any = [];

  constructor(private srvAffichage: AffichageService, private srvParachutiste : ParachutisteService) {
    this.refresh();
    this.refresh2();
  }

  ngOnInit(): void {
  }

  refresh = () => this.vols = this.srvAffichage.findAll();
  refresh2 = () => this.parachutistes = this.srvParachutiste.findAll();

}
