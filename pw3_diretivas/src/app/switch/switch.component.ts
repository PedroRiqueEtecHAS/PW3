import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {
  numero : number = 0;

  incrementar(){
    this.numero++;
    if(this.numero > 4){
      this.numero = 1;
    }
  }
}
