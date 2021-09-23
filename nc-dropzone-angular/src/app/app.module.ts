import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParachutisteComponent } from './parachutiste/parachutiste.component';
import { ParachuteComponent } from './parachute/parachute.component';
import { AvionComponent } from './avion/avion.component';
import { PiloteComponent } from './pilote/pilote.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InscriptionComponent } from './inscription/inscription.component';
import { AffichageComponent } from './affichage/affichage.component';
import { VolEditionComponent } from './vol-edition/vol-edition.component';
import { DisponiblePipe } from './disponible.pipe';
import { BeerListComponent } from './beer-list/beer-list.component';
import { SautTandemComponent } from './saut-tandem/saut-tandem.component';
import { HauteurPipe } from './hauteur.pipe';
import { TypeOfPipe } from './type-of.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AvionComponent,
    PiloteComponent,
    ParachutisteComponent,
    ParachuteComponent,
    ModalComponent,
    InscriptionComponent,
    AffichageComponent,
    VolEditionComponent,
    DisponiblePipe,
    BeerListComponent,
    SautTandemComponent,
    HauteurPipe,
    TypeOfPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
