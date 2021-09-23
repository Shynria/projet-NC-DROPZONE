import { Component, OnInit } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { InscriptionService } from '../inscription.service';
import { ParachuteService } from '../parachute.service';
import { ParachutisteService } from '../parachutiste.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(
    private srvSaut: InscriptionService,
    private srvParachutiste: ParachutisteService,
    private srvParachute: ParachuteService)
  {
    this.refresh();
    this.formSaut = this.initSaut();
  }

  ngOnInit(): void { }

  parachutistes: any = [];
  parachutes: any = [];
  formSaut: any = {};

  public tailleGroupe: any = 1;

  refresh = () => {
    this.srvParachutiste.findAll().subscribe(parachutistes => { this.parachutistes = parachutistes; console.log(this.parachutistes) });
    this.srvParachute.findAll().subscribe(parachutes => { this.parachutes = parachutes; console.log(this.parachutes) });
  }

  ajouterSaut() {
    this.srvSaut.add(this.formSaut).subscribe();
    this.formSaut = this.initSaut();
    this.tailleGroupe = 1;
  }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.parachutistes.filter((p: any) => p.nom.concat(" ", p.prenom).toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  formatter = (para: { nom: string, prenom: string }) => `${para.nom} ${para.prenom}`;

  counter(i: number) {
    return new Array(i);
  }

  initSaut(){
    return {
      hauteur: "MILLE_DEUX_CENTS",
      parachutistes: []
    };
  }

  iNull(v: any) {
    return 
  }
}
