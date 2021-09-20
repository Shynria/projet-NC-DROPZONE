import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParachutisteComponent } from './parachutiste/parachutiste.component';
import { ParachuteComponent } from './parachute/parachute.component';

@NgModule({
  declarations: [
    AppComponent,
    ParachutisteComponent,
    ParachuteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
