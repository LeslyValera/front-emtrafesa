/*import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { MenubarComponent } from './componentes/menubar/menubar.component';
import { ItinerarioComponent } from './componentes/itinerario/itinerario.component';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { AsientoComponent } from './componentes/asiento/asiento.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenubarComponent,
    ItinerarioComponent,
    AsientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [], // No necesitas declarar servicios aquí si tienen providedIn: 'root'
  bootstrap: [AppComponent]
})
export class AppModule { }*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { MenubarComponent } from './componentes/menubar/menubar.component';
import { ItinerarioComponent } from './componentes/itinerario/itinerario.component';
import { AsientoComponent } from './componentes/asiento/asiento.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenubarComponent,
    ItinerarioComponent,
    AsientoComponent // nuevo componente agregado aquí
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
