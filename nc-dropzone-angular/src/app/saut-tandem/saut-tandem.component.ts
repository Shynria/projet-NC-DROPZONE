import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ParachutisteService } from '../parachutiste.service';
import { SautTandemService } from '../saut-tandem.service';

@Component({
  selector: 'app-saut-tandem',
  templateUrl: './saut-tandem.component.html',
  styleUrls: ['./saut-tandem.component.css']
})
export class SautTandemComponent implements OnInit {

  constructor(private srvSautTandem: SautTandemService, private srvParachutiste: ParachutisteService) {
    this.refresh();
    this.parachutistes = this.srvParachutiste.findAll();
   }

  ngOnInit(): void {
  }

  parachutistes: any = [];

  sautsTandem: any = [
    {
      parachutiste: {
        nom: "",
        prenom: ""
      },
      instructeur: {
        nom: "",
        prenom: ""
      },
      videoman: {
        nom: "",
        prenom:""
      }
    }
  ];

  formSautTandem = this.initSautTandem();

  @ViewChild('modal') modal: any;
  modalTitre : string = "pas de titre";
  edition: boolean = false; // si false => creation, si true modification

  refresh = () => this.sautsTandem = this.srvSautTandem.findAll();

  ajouterSautTandem() {
    this.modal.close();
    this.srvSautTandem.add(this.formSautTandem).subscribe(this.refresh);
  }

  ajouterSautTandemModal() {
    this.formSautTandem = this.initSautTandem();
    this.modalTitre = "Ajouter un Saut Tandem";
    this.edition = false;
    this.modal.open();
  }

  supprimerSautTandem(sautTandem: any) {
    this.srvSautTandem.delete(sautTandem).subscribe(this.refresh);
  }

  modifierSautTandem() {
    this.modal.close();
    this.srvSautTandem.update(this.formSautTandem).subscribe(this.refresh);
  }

  modifierSautTandemModal(sautTandem: any) {
    this.formSautTandem = Object.assign({}, sautTandem);
    this.modalTitre = "Modifier un Saut Tandem";
    this.edition = true;
    this.modal.open();
  }

  initSautTandem() {
    return {
      parachutiste: {
        nom: "",
        prenom: ""
      },
      instructeur: {
        nom: "",
        prenom: ""
      },
      videoman: {
        nom: "",
        prenom:""
      }
    }
  }

}
