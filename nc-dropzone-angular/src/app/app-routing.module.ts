import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffichageComponent } from './affichage/affichage.component';
import { AvionComponent } from './avion/avion.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ParachuteComponent } from './parachute/parachute.component';
import { ParachutisteComponent } from './parachutiste/parachutiste.component';
import { PiloteComponent } from './pilote/pilote.component';
import { SautTandemComponent } from './saut-tandem/saut-tandem.component';
import { VolEditionComponent } from './vol-edition/vol-edition.component';

const routes: Routes = [
  {path: "avion", component: AvionComponent},
  {path: "parachutiste", component: ParachutisteComponent},
  {path: "parachute", component: ParachuteComponent},
  {path: "pilote", component: PiloteComponent},
  {path: "inscription", component: InscriptionComponent},
  {path: "affichage", component: AffichageComponent},
  {path: "vol", component: VolEditionComponent},
  {path: "beer-list", component: BeerListComponent},
  {path: "saut-tandem", component: SautTandemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
