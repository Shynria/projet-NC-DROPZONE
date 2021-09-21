import { Component, OnInit } from '@angular/core';
import { ParachuteService } from '../parachute.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { getLocaleDateFormat, getLocaleDayNames } from '@angular/common';

@Component({
  selector: 'app-parachute',
  templateUrl: './parachute.component.html',
  styleUrls: ['./parachute.component.css']
})
export class ParachuteComponent implements OnInit {

  parachutiste: any = {

  }

  formParachute: any =     {
    nomHarnais: "",
    systemeSecurite: "",
    nomVoilePrincipale: "",
    nomVoileSecours: "",
    tailleVoilePrincipale: 0,
    tailleVoileSecours: 0,
    datePliageVoileSecours: new Date(),
    etat: true,
    proprietaire: null,
    utilisateur: null
  };



  parachutes: any = [
    {
      nomHarnais: "bobbinson",
      systemeSecurite: "bobby",
      nomVoilePrincipale: "yes",
      nomVoileSecours: "demain",
      tailleVoilePrincipale: "parachute 1",
      tailleVoileSecours: "demain",
      datePliageVoileSecours: "demain",
      etat: "demain",
      proprietaire: "demain",
      utilisateur: "demain"
    }
  ]

  parachutistes: any = [];

  constructor(private srvParachute: ParachuteService) {
    this.refresh();
   }

  ngOnInit(): void {
  }

  ajouterParachute(){
    this.srvParachute.add(this.formParachute).subscribe(this.refresh)
  }

  editerParachute(parachute: any){
    this.formParachute = parachute;
  }

  modifierParachute(){
    this.srvParachute.edit(this.formParachute).subscribe(this.refresh);
  }

  supprimerParachute(parachute: any){
    this.srvParachute.delete(parachute).subscribe(this.refresh);
  }

  refresh = () => this.parachutes = this.srvParachute.findAll();

}
