import { Component, OnInit, ViewChild } from '@angular/core';
import { ParachuteService } from '../parachute.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { getLocaleDateFormat, getLocaleDayNames } from '@angular/common';
import { ParachutisteService } from '../parachutiste.service';

@Component({
  selector: 'app-parachute',
  templateUrl: './parachute.component.html',
  styleUrls: ['./parachute.component.css']
})
export class ParachuteComponent implements OnInit {
  @ViewChild('modal') modal: any;

  parachutiste: any = {
  }

  formParachute: any = {};

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

  edit: boolean = false;

  modalTitre: string = "";

  constructor(private srvParachute: ParachuteService,private srvParachutiste: ParachutisteService , private modalService: NgbModal) {
    this.refresh();
    this.parachutistes = this.srvParachutiste.findAll()
   }

  ngOnInit(): void {
  }

  ouvrirModalAjout(){
    this.initParachute();
    this.modal.open();
    this.edit = false;
    this.modalTitre = "Ajout parachute"
  }

  ajouterParachute(){
    this.srvParachute.add(this.formParachute).subscribe(this.refresh)
    this.initParachute();
  }

  editerParachute(parachute: any){
    this.modal.open();
    this.formParachute = Object.assign({}, parachute);
    this.edit = true;
    this.modalTitre = "Modification parachute"
  }

  modifierParachute(){
    this.srvParachute.edit(this.formParachute).subscribe(this.refresh);
    this.initParachute();
  }

  supprimerParachute(parachute: any){
    this.srvParachute.delete(parachute).subscribe(this.refresh);
  }

  refresh = () => this.parachutes = this.srvParachute.findAll()


  initParachute(){
    this.formParachute = {
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
  }

}
