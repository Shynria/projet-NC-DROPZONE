import { Component, OnInit } from '@angular/core';
import { BeerListService } from '../beer-list.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  beerList: any = [];

  constructor(private srvBeerList: BeerListService) { 
    this.beerList = this.srvBeerList.findAll();
  }

  refresh = () => this.beerList = this.srvBeerList.findAll();

  supprimerMembre(parachutiste: any){
    this.srvBeerList.delete(parachutiste).subscribe(this.refresh);
  };

  ngOnInit(): void {
  }

}
