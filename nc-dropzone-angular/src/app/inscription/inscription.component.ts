import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, OperatorFunction } from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { ParachutisteService } from '../parachutiste.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  constructor(private srvParachutiste: ParachutisteService) {}
  noms: any = new Observable();
  
  
  public model: any;

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.noms.filter((v: string) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

    voirParachutiste(parachutiste: any){
      this.noms = this.noms;

      this.srvParachutiste
        .findByNom(parachutiste)
        .subscribe();
    }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
