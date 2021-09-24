import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ParachuteService } from '../parachute.service';
import { ParachutisteService } from '../parachutiste.service';
import { SautTandemService } from '../saut-tandem.service';

@Component({
  selector: 'app-saut-tandem',
  templateUrl: './saut-tandem.component.html',
  styleUrls: ['./saut-tandem.component.css']
})
export class SautTandemComponent implements OnInit {

  constructor(private srvSautTandem: SautTandemService, private srvParachutiste: ParachutisteService, private srvParachute: ParachuteService) {
    this.refresh();
    this.parachutistesDebutant = this.srvParachutiste.findAllByNiveau("DEBUTANT");
    this.parachutistesConfirme = this.srvParachutiste.findAllByNiveau("CONFIRME");
   }

  ngOnInit(): void {
  }

  parachutistesDebutant: any = [];
  parachutistesConfirme: any = [];

  parachutes: any = [];

  sautTandem: any = [];

  formParachutiste: any = {};

  formSautTandem: any = {
    hauteur: 0,
    parachutiste: {
      id: 0,
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
    this.parachutes = this.srvParachute.findAll();
  }

  ajouterSautTandem() {
    if(this.formSautTandem.videoman.id==0){
      this.formSautTandem.videoman=null;
    }
    this.srvSautTandem.add(this.formSautTandem).subscribe(this.refresh);
    this.modal.close();
    this.formSautTandem = this.initSautTandem();
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
    if(this.formSautTandem.videoman.id==0){
      this.formSautTandem.videoman=null;
    }
    this.srvSautTandem.update(this.formSautTandem).subscribe(this.refresh);
    this.modal.close();
    this.formSautTandem = this.initSautTandem();
  }

  modifierSautTandemModal(sautTandem: any) {
    this.formSautTandem = Object.assign({}, sautTandem);
    if(this.formSautTandem.videoman == null){
      this.formSautTandem.videoman = {id:0};
    }
    this.modalTitre = "Modifier un Saut Tandem";
    this.edition = true;
    this.modal.open();
  }

  associerParachute(parachutiste: any, parachute: any){
    this.initParachutiste();
    this.formParachutiste = Object.assign({}, parachutiste);
    this.formParachutiste.parachuteEquipe = parachute;
    console.log(this.formParachutiste)
    this.srvParachutiste.update(this.formParachutiste).subscribe(this.refresh);
  }

  retirerParachute(parachutiste: any){
    this.initParachutiste();
    this.formParachutiste = Object.assign({}, parachutiste);
    this.formParachutiste.parachuteEquipe = null;
    this.srvParachutiste.update(this.formParachutiste).subscribe(this.refresh);
  }

  initParachutiste(){
    this.formParachutiste = {
      nom: "",
      prenom: "",
      parachuteEquip: null,
      listeParachute: []
    }
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
