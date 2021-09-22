import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ParachutisteService } from '../parachutiste.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  
  nbPersonnes: any = new Observable;
  hauteur: any = new Observable;
  parachutiste: any = {
    nom: ""
  };
  nom: any = new Observable;
  parachute: any = {
    nomHarnais: "",
    etat: Boolean
  };
  parachutes: any = [];
  
  constructor(private srvParachutiste: ParachutisteService) {
    this.parachutiste = this.srvParachutiste.findAll();
  }
  
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
