import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ParachutisteService } from '../parachutiste.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  public radioGroupForm: FormGroup;

  parachutiste: any = {
    nom: "",
      prenom: "",
      licence: 0,
      isBeerLine: false
  }

  parachutistes: any = [
  ];

 
  constructor(private srvParachutiste: ParachutisteService, private formBuilder: FormBuilder) { 
    this.parachutistes = this.srvParachutiste.findAll();
  }

  refresh = () => this.parachutistes = this.srvParachutiste.findAll();

  ngOnInit(): void {
    this.radioGroupForm = this.formBuilder.group({
      'model': false
    });
  }

}
