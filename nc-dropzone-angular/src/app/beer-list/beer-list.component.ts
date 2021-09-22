import { Component, OnInit } from '@angular/core';
import { ParachutisteService } from '../parachutiste.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  
  parachutiste: any = {
    nom: "",
      prenom: "",
      licence: 0,
      isBeerLine: false
  }

  parachutistes: any = [
    {
      nom: "",
      prenom: "",
      licence: 0,
      isBeerLine: false
    }
  ];

 
  constructor(private srvParachutiste: ParachutisteService) { 
    this.parachutistes = this.srvParachutiste.findAll();
  }

  refresh = () => this.parachutistes = this.srvParachutiste.findAll();

  ngOnInit(): void {
  }

}
