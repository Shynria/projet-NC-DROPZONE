import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvionComponent } from './avion/avion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ParachuteComponent } from './parachute/parachute.component';
import { ParachutisteComponent } from './parachutiste/parachutiste.component';
import { PiloteComponent } from './pilote/pilote.component';

const routes: Routes = [
  {path: "avion", component: AvionComponent},
  {path: "parachutiste", component: ParachutisteComponent},
  {path: "parachute", component: ParachuteComponent},
  {path: "pilote", component: PiloteComponent},
  {path: "inscription", component: InscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
