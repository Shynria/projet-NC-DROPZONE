import { Component, OnInit, ViewChild } from '@angular/core';
import { ParachutisteService } from '../parachutiste.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-parachutiste',
  templateUrl: './parachutiste.component.html',
  styleUrls: ['./parachutiste.component.css']
})
export class ParachutisteComponent implements OnInit {

  @ViewChild('modal') modal: any;

  formParachutiste: any ={
    nom: "",
    prenom: "",
    licence: "",
    dateLicence: "",
    parachuteEquip: ""
  };

  parachutistes: any = [
  {
    nom: "bobbinson",
    prenom: "bobby",
    licence: "yes",
    dateLicence: "demain",
    parachuteEquip: "parachute 1"
  },
  {
    nom: "bobbinson",
    prenom: "bobby",
    licence: "yes",
    dateLicence: "demain",
    parachuteEquip: "parachute 1"
  }];

  constructor(private srvParachutiste: ParachutisteService, private modalService: NgbModal) {
    //this.parachutistes = this.srvParachutiste.findAll().subscribe();
   }

  ngOnInit(): void {
  }

  ajouterParachutiste(){
    // this.srvParachutiste.add(this.formParachutiste).subscribe();
  }

  editerParachutiste(parachutiste: any){
    this.formParachutiste = parachutiste;
    this.modal.open();
  }

  modifierParachutiste(){
    // this.srvParachutiste.edit(this.formParachutiste).subscribe();
  }

  supprimerParachutiste(parachutiste: any){
    // this.srvParachutiste.delete(parachutiste).subscribe();
  }
  
}
