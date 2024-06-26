import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-overflow',
  templateUrl: './text-overflow.component.html',
  styleUrls: ['./text-overflow.component.css']
})
export class TextOverflowComponent {

  @Input() clip: boolean = true;
  @Input() texto: string = ""

}
