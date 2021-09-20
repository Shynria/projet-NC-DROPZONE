import { Component, OnInit } from '@angular/core';
import { ParachutisteService } from '../parachutiste.service';

@Component({
  selector: 'app-parachutiste',
  templateUrl: './parachutiste.component.html',
  styleUrls: ['./parachutiste.component.css']
})
export class ParachutisteComponent implements OnInit {

  formParachutiste: any;

  parachutistes: any = [];

  constructor(private srvParachutiste: ParachutisteService) {
    this.parachutistes = this.srvParachutiste.findAll().subscribe();
   }

  ngOnInit(): void {
  }

  ajouterParachutiste(){
    this.srvParachutiste.add(this.formParachutiste).subscribe();
  }

  editerParachutiste(parachutiste: any){
    this.formParachutiste = parachutiste;
  }

  modifierParachutiste(){
    this.srvParachutiste.edit(this.formParachutiste).subscribe();
  }

  supprimerParachutiste(parachutiste: any){
    this.srvParachutiste.delete(parachutiste).subscribe();
  }
  
}
