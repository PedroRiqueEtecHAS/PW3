import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-biscoito',
  templateUrl: './biscoito.component.html',
  styleUrls: ['./biscoito.component.css']
})
export class BiscoitoComponent {
  quebrar : boolean = true;
  valor : number = 0;

  capturar(event: any){
    this.quebrar = event.trocar
  }

  capturar2(event: any){
    this.valor = event.trocarN
  }

}
