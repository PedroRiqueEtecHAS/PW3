import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pw3-input-output';

  onCapturarResultados(evento: any){
    alert(evento.numeroGerado)
  }
}
