import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { PagPrincipalComponent } from './pag-principal/pag-principal.component';
import { PagSecundariaComponent } from './pag-secundaria/pag-secundaria.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { PagTerceariaComponent } from './pag-tercearia/pag-tercearia.component';



@NgModule({
  declarations: [
    AppComponent,
    PagPrincipalComponent,
    PagSecundariaComponent,
    PagTerceariaComponent
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    MatGridListModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
