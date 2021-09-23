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
    this.parachutistesDebutant = this.srvParachutiste.findAllByNiveau("DEBUTANT");
    this.parachutistesConfirme = this.srvParachutiste.findAllByNiveau("CONFIRME");
   }

  ngOnInit(): void {
  }

  parachutistesDebutant: any = [];
  parachutistesConfirme: any = [];


  sautTandem: any = [];

  formSautTandem: any = {
    hauteur: 0,
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
  };

  @ViewChild('modal') modal: any;
  modalTitre : string = "pas de titre";
  edition: boolean = false; // si false => creation, si true modification

  refresh = () => 
  {
    this.sautTandem = this.srvSautTandem.findAll();
    this.parachutistesDebutant = this.srvParachutiste.findAllByNiveau("DEBUTANT");
    this.parachutistesConfirme = this.srvParachutiste.findAllByNiveau("CONFIRME");
  }

  ajouterSautTandem() {
    this.srvSautTandem.add(this.formSautTandem).subscribe(this.refresh);
    console.log(this.formSautTandem.parachutiste)
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
      hauteur: 0,
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
