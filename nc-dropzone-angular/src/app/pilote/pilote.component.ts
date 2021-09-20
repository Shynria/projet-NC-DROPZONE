import { Component, OnInit } from '@angular/core';
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

  formPilote = {
    nom: "",
    prenom: "",
    licence: "",
    disponible: false
  }

  refresh = () => this.pilotes = this.srvPilote.findAll();

  ajouterPilote() {
    this.srvPilote.add(this.formPilote).subscribe(this.refresh);
  }

  supprimerPilote(avion: any) {
    this.srvPilote.delete(avion).subscribe(this.refresh);
  }

  modifierPilote() {
    this.srvPilote.update(this.formPilote).subscribe(this.refresh);
  }

  editerPilote(avion: any) {
    this.formPilote = avion;
  }
}
