import { Component, OnInit, ViewChild } from '@angular/core';
import { BeerListService } from '../beer-list.service';
import { ParachutisteService } from '../parachutiste.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  @ViewChild('modal') modal: any;

  modalTitre: string = "";

  parachutistes: any = [
    {
      nom: "",
      prenom: "",
      licence: 0
    }
  ];

  beerList: any = {
    id: 0,
    parachutistes: [] 
  };

  constructor(private srvBeerList: BeerListService, private srvParachutiste: ParachutisteService) { 
    this.beerList = this.srvBeerList.findAll();
    this.parachutistes = this.srvParachutiste.findAll();
  }

  refresh = () => this.beerList = this.srvBeerList.findAll();

  ouvrirModal(){
    this.modal.open();
    this.modalTitre = "Liste des membres du club"
  }

  ajouterMembre(parachutistes: any){
    this.srvBeerList.add(parachutistes).subscribe(this.refresh);
    // il faut le subscribe pour que ça marche
  };

  supprimerMembre(parachutistes: any){
    this.srvBeerList.delete(parachutistes).subscribe(this.refresh);
  };


  ngOnInit(): void {
  }

}
