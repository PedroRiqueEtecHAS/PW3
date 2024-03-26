import { Component, Input, Output } from '@angular/core';





@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css']
})
export class ImagemComponent {
  biscoitoInteiro: string ="../../assets/biscoito.png"
  biscoitoQuebrado: string ="../../assets/biscoito-quebrado.png"
  @Input() quebrar : boolean = false;

  capturar(event: any){
    this.quebrar = event.trocar
  }
}
