import { Component, OnInit, ViewChild } from '@angular/core';
import { AvionService } from '../avion.service';

@Component({
  selector: 'app-avion',
  templateUrl: './avion.component.html',
  styleUrls: ['./avion.component.css']
})
export class AvionComponent implements OnInit {

  constructor(private srvAvion: AvionService) {
    this.refresh();
  }

  ngOnInit(): void {
  }

  avions: any = [];

  formAvion = this.initAvion();

  @ViewChild('modal') modal: any;
  modalTitre : string = "pas de titre";
  edition: boolean = false; // si false => creation, si true modification

  refresh = () => this.avions = this.srvAvion.findAll();

  ajouterAvion() {
    this.modal.close();
    this.srvAvion.add(this.formAvion).subscribe(this.refresh);
  }

  ajouterAvionModal() {
    this.formAvion = this.initAvion();
    this.modalTitre = "Ajouter un avion";
    this.edition = false;
    this.modal.open();
  }

  supprimerAvion(avion: any) {
    this.srvAvion.delete(avion).subscribe(this.refresh);
  }

  modifierAvion() {
    this.modal.close();
    this.srvAvion.update(this.formAvion).subscribe(this.refresh);
  }

  modifierAvionModal(avion: any) {
    this.formAvion = Object.assign({}, avion);
    this.modalTitre = "Modifier un avion";
    this.edition = true;
    this.modal.open();
  }

  initAvion() {
    return {
      nom: "",
      capacite: 0,
      nbRotaMax: 0,
      altitudeMax: 0,
      disponible: false
    };
  }
}
