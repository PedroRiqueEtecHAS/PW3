import { Component, EventEmitter, Input, Output,  } from '@angular/core';


@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent {
  valor : number = 0
  max : number = 9
  min : number = 0
  @Output() resultado = new EventEmitter
  @Output() numero = new EventEmitter

 QuebrarBotao(){
    this.resultado.emit({trocar: false})
    this.valor =  Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.numero.emit({trocarN : this.valor})
  }

  ReiniciarBotao(){
    this.resultado.emit({trocar: true})
  }

  }


