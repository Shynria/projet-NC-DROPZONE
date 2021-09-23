import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ParachutisteService } from '../parachutiste.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
 

  formParachutiste: any = {
    nom: "",
    prenom: "",
    isBeerLine: false
  };

  parachutiste: any = {};

  parachutistes: any = [
  ];
  
  constructor(private srvParachutiste: ParachutisteService) { 
    this.parachutistes = this.srvParachutiste.findAll();
  }

  refresh = () => this.parachutistes = this.srvParachutiste.findAll();

  beerFalse(parachutiste: any){
    parachutiste.isBeerLine = false;
    this.srvParachutiste.edit(parachutiste).subscribe();
  }

  beerTrue(parachutiste: any){
    parachutiste.isBeerLine = true;
    this.srvParachutiste.edit(parachutiste).subscribe();
  }

  ngOnInit(): void {
  }

}
