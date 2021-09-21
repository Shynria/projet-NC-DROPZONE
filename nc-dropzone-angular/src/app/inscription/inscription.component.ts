import { Component, OnInit } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { ParachutisteService } from '../parachutiste.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  
  nbPersonnes: any = new Observable;
  parachutiste: any = {};
  nom: any = new Observable;
  
  constructor(private srvParachutiste: ParachutisteService) {
    this.parachutiste = this.srvParachutiste.findAll();
  }
  
  
  public model: any;

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.nom.filter((v: string) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
