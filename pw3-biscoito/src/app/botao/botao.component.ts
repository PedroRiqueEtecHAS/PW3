import { Component, EventEmitter, Input, Output,  } from '@angular/core';


@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent {

  @Output() resultado = new EventEmitter


 QuebrarBotao(){
    this.resultado.emit({trocar: true})
  }


  }


