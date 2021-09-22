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
  
  beerLists: any = [];
  parachutistes: any = [];

  parachutiste: any = {};
  
  

  constructor(private srvBeerList: BeerListService, private srvParachutiste: ParachutisteService) { 
    this.beerLists = this.srvBeerList.findAll();
    this.parachutistes = this.srvParachutiste.findAll();
  }

  refresh = () => this.beerLists = this.srvBeerList.findAll();

  ouvrirModal(){
    this.modal.open();
    this.modalTitre = "Liste des membres du club"
  }

  ajouterMembre(parachutiste: any){
    this.srvBeerList.add(parachutiste).subscribe(this.refresh);
    // il faut le subscribe pour que ça marche
  };

  supprimerMembre(parachutiste: any){
    this.srvBeerList.delete(parachutiste).subscribe(this.refresh);
  };


  ngOnInit(): void {
  }

}
