import { Component, OnInit } from '@angular/core';
import { ParachuteService } from '../parachute.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-parachute',
  templateUrl: './parachute.component.html',
  styleUrls: ['./parachute.component.css']
})
export class ParachuteComponent implements OnInit {

  formParachute: any;

  parachutes: any = []

  constructor(private srvParachute: ParachuteService) {
    this.parachutes = this.srvParachute.findAll().subscribe()
   }

  ngOnInit(): void {
  }

  ajouterParachute(){
    this.srvParachute.add(this.formParachute).subscribe()
  }

  editerParachute(parachute: any){
    this.formParachute = parachute;
  }

  modifierParachute(){
    this.srvParachute.edit(this.formParachute).subscribe();
  }

  supprimerParachute(parachute: any){
    this.srvParachute.delete(parachute).subscribe();
  }

}
