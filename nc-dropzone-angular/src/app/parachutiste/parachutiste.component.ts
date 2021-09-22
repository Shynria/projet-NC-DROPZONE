import { Component, OnInit, ViewChild } from '@angular/core';
import { ParachutisteService } from '../parachutiste.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ParachuteService } from '../parachute.service';



@Component({
  selector: 'app-parachutiste',
  templateUrl: './parachutiste.component.html',
  styleUrls: ['./parachutiste.component.css']
})
export class ParachutisteComponent implements OnInit {

  @ViewChild('modal') modal: any;

  @ViewChild('modalParachute') modalParachute: any;

  formParachutiste: any = {};

  formParachute: any = {};

  parachutistes: any = [
    {
      nom: "",
      prenom: "",
      licence: 0,
      dateLicence: new Date(),
      parachuteEquip: null
    }
  ];

  edit: boolean = false;

  modalTitre: string = "";

  parachute: any = {}

  parachutes: any = [
    {
      nomHarnais: "oe salut",
      systemeSecurite: "",
      nomVoilePrincipale: "",
      nomVoileSecours: "",
      tailleVoilePrincipale: 0,
      tailleVoileSecours: 0,
      datePliageVoileSecours: new Date(),
      etat: true,
      proprietaire: null,
      utilisateur: null
    }]

    parachutesPerso: any = [];

    afficheParachutePerso: boolean = false;

  constructor(private srvParachutiste: ParachutisteService, private srvParachute: ParachuteService, private modalService: NgbModal) {
    this.refresh();
    this.parachutes = this.srvParachute.findAll();
   }

  ngOnInit(): void {
  }

  ajouterParachutiste(){
     this.srvParachutiste.add(this.formParachutiste).subscribe(this.refresh);
     this.initParachutiste();
  }

  editerParachutiste(parachutiste: any){
    this.modal.open();
    this.formParachutiste = Object.assign({}, parachutiste);
    this.edit = true;
    this.modalTitre = "Modification parachutiste"
  }

  modifierParachutiste(){
     this.srvParachutiste.edit(this.formParachutiste).subscribe(this.refresh);
     this.initParachutiste();
  }

  supprimerParachutiste(parachutiste: any){
     this.srvParachutiste.delete(parachutiste).subscribe(this.refresh);
  }

  ouvrirModalAjout(){
    this.initParachutiste();
    this.modal.open();
    this.edit = false;
    this.modalTitre = "Ajout parachutiste"
  }

  refresh = () => this.parachutistes = this.srvParachutiste.findAll();
  
  initParachutiste(){
    this.formParachutiste = {
      nom: "",
      prenom: "",
      licence: 0,
      dateLicence: new Date(),
      parachuteEquip: null
    }
  }

  associerParachute(parachutiste: any, parachute: any){
    this.formParachutiste = Object.assign({}, parachutiste);
    this.formParachutiste.parachuteEquipe = parachute;
    this.srvParachutiste.edit(this.formParachutiste).subscribe(this.refresh);
  }

  retirerParachute(parachutiste: any){
    this.formParachutiste = Object.assign({}, parachutiste);
    this.formParachutiste.parachuteEquipe = null;
    this.srvParachutiste.edit(this.formParachutiste).subscribe(this.refresh);
  }

  parachutisteVoirParachute: any;

  voirParachutePerso(parachutiste: any){
    this.parachutesPerso = parachutiste.listeParachute;
    this.afficheParachutePerso = true;
    this.parachutisteVoirParachute = parachutiste;
  }

  retourParachutistes(){
    this.afficheParachutePerso = false;
  }

  editerParachute(parachute: any){
    this.modalParachute.open();
    this.formParachute = Object.assign({}, parachute);
    this.formParachute.proprietaire = this.parachutisteVoirParachute;
    this.edit = true;
    this.modalTitre = "Modification parachute"
  }

  ajouterParachute(){
    this.formParachute.proprietaire = this.parachutisteVoirParachute;
    this.srvParachute.add(this.formParachute).subscribe(this.refresh)
    this.initParachute();
  }

  modifierParachute(){
    this.srvParachute.edit(this.formParachute).subscribe(this.refresh);
    this.initParachute();
  }

  supprimerParachute(parachute: any){
    this.srvParachute.delete(parachute).subscribe(this.refresh);
  }

  ouvrirModalAjoutParachute(){
    this.initParachute();
    this.modalParachute.open();
    this.edit = false;
    this.modalTitre = "Ajout parachute"
  }

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
