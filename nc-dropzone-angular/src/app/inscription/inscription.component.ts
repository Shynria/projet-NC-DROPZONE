import { Component, OnInit } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { InscriptionService } from '../inscription.service';
import { ParachutisteService } from '../parachutiste.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private srvSaut: InscriptionService, private srvParachutiste: ParachutisteService) {
    this.refresh();
    this.initSaut();
  }

  ngOnInit(): void { }

  parachutistes: any = [];
  formSaut: any = {};

  public listePara: any = [];
  public tailleGroupe: any = 1;

  refresh = () => {
    this.srvParachutiste.findAll().subscribe(parachutistes => { this.parachutistes = parachutistes });
  }

  ajouterSaut() {
    this.srvSaut.add(this.formSaut).subscribe();
  }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.parachutistes.filter((p: any) => p.nom.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  formatter = (para: { nom: string, prenom: string }) => `${para.nom} ${para.prenom}`;

  counter(i: number) {
    return new Array(i);
  }

  initSaut(){
    this.formSaut = {
      hauteur: "",
      parachutistes: []
    };
  }
}
