import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-biscoito',
  templateUrl: './biscoito.component.html',
  styleUrls: ['./biscoito.component.css']
})
export class BiscoitoComponent {
  quebrar : boolean = false;

  capturar(event: any){
    this.quebrar = event.trocar
  }

}
