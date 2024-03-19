import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent {
  @Input() mostrar: boolean = false;
  indicar: boolean = false
  indicar2: boolean = false


  }


