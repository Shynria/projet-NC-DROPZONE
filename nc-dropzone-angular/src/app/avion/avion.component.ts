import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AvionService } from '../avion.service';

@Component({
  selector: 'app-avion',
  templateUrl: './avion.component.html',
  styleUrls: ['./avion.component.css']
})
export class AvionComponent implements OnInit {

  constructor(private srvAvion: AvionService, private modalService: NgbModal) {
    // this.refresh();
  }

  ngOnInit(): void {
  }

  @ViewChild('modal') modal: any;

  avions: any = [
    {
      nom: "TEST",
      capacite: 5,
      nbRotaMax: 5,
      altitudeMax: 5,
      disponible: false
    }
  ];

  formAvion = {
    nom: "",
    capacite: 0,
    nbRotaMax: 0,
    altitudeMax: 0,
    disponible: false
  };

  

  //refresh = () => this.avions = this.srvAvion.findAll();

  // ajouterAvion() {
  //   this.srvAvion.add(this.formAvion).subscribe(this.refresh);
  // }

  // supprimerAvion(avion: any) {
  //   this.srvAvion.delete(avion).subscribe(this.refresh);
  // }

  // modifierAvion() {
  //   this.srvAvion.update(this.formAvion).subscribe(this.refresh);
  // }

  editerAvion(avion: any) {
    this.formAvion = avion;
    this.modal.open();
  }
}
