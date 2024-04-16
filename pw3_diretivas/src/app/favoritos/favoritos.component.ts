import { Component } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {
  professor : any[] = [
    {"nome": "Marion", "favorito": true},
    {"nome": "Adriano", "favorito": false},
    {"nome": "Rogerio", "favorito": false},
    {"nome": "Guilherme", "favorito": true}
  ]
}
