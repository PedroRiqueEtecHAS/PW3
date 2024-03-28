import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-frase',
  templateUrl: './frase.component.html',
  styleUrls: ['./frase.component.css']
})
export class FraseComponent {

  @Input() quebrar : boolean = false;
  min = 0
  max = 9

  arrayFrases: Array<string> = [
    "frase 1", "frase 2", "frase 3", "frase 4", "frase 5", "frase 6", "frase 7", "frase 8", "frase 9", "frase 10"
  ]
  @Input() valor =  Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;

  capturar2(event: any){
    this.valor = event.trocarN
  }
}
