import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
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
  }
}
