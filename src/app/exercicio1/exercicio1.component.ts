import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  templateUrl: './exercicio1.component.html',
  styleUrls: ['./exercicio1.component.css']
})
export class Exercicio1Component {
  numero : number = 10;
  ocultar: boolean = false;

  incrementar(){
    this.numero += 10
  }
  ocultarText(){
    if(this.ocultar == false){
      this.ocultar = true;
    }else{
      this.ocultar = false
    }

}}
