import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvionComponent } from './avion/avion.component';
import { ParachutisteComponent } from './parachutiste/parachutiste.component';

const routes: Routes = [
  {path: "avion", component: AvionComponent},
  {path: "parachutiste", component: ParachutisteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
