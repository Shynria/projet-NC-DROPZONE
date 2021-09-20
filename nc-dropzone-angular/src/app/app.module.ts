import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParachutisteComponent } from './parachutiste/parachutiste.component';
import { ParachuteComponent } from './parachute/parachute.component';
import { AvionComponent } from './avion/avion.component';
import { PiloteComponent } from './pilote/pilote.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AvionComponent,
    PiloteComponent,
    ParachutisteComponent,
    ParachuteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
