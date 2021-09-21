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

  formParachutiste: any = {};

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

  constructor(private srvParachutiste: ParachutisteService, private modalService: NgbModal) {
    this.refresh();
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
}
