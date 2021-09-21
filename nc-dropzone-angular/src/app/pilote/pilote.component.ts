import { Component, OnInit, ViewChild } from '@angular/core';
import { PiloteService } from '../pilote.service';

@Component({
  selector: 'app-pilote',
  templateUrl: './pilote.component.html',
  styleUrls: ['./pilote.component.css']
})
export class PiloteComponent implements OnInit {

  constructor(private srvPilote: PiloteService) {
    this.refresh();
  }

  ngOnInit(): void {
  }

  pilotes : any = [];

  formPilote = this.initPilote();

  @ViewChild('modal') modal: any;
  modalTitre = "pas de titre";
  edition = false;

  refresh = () => this.pilotes = this.srvPilote.findAll();

  ajouterPilote() {
    this.modal.close();
    this.srvPilote.add(this.formPilote).subscribe(this.refresh);
  }

  ajouterPiloteModal() {
    this.formPilote = this.initPilote();
    this.modalTitre = "Ajouter un avion";
    this.edition = false;
    this.modal.open();
  }

  supprimerPilote(avion: any) {
    this.srvPilote.delete(avion).subscribe(this.refresh);
  }

  modifierPilote() {
    this.modal.close();
    this.srvPilote.update(this.formPilote).subscribe(this.refresh);
  }

  modifierPiloteModal(avion: any) {
    this.formPilote = Object.assign({}, avion);
    this.modalTitre = "Modifier un avion";
    this.edition = true;
    this.modal.open();
  }

  initPilote() {
    return {
      nom: "",
      prenom: "",
      disponible: false
    };
  }
}
