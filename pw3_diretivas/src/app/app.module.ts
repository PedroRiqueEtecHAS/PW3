import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgifComponent } from './ngif/ngif.component';
import { SwitchComponent } from './switch/switch.component';
import { NgforComponent } from './ngfor/ngfor.component';

@NgModule({
  declarations: [
    AppComponent,
    NgifComponent,
    SwitchComponent,
    NgforComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
