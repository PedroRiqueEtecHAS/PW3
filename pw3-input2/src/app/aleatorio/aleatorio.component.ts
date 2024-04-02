import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-aleatorio',
  templateUrl: './aleatorio.component.html',
  styleUrls: ['./aleatorio.component.css']
})
export class AleatorioComponent {
  @Input() min: number = 0;
  @Input() max: number = 1;
  @Output() resultado = new EventEmitter;

  gerar(){
    let valor = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.resultado.emit({quebrar: valor});
  }
}
