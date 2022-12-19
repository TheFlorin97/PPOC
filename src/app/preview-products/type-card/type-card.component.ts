import { Component, Input } from '@angular/core';

@Component({
  selector: 'type-card',
  templateUrl: './type-card.component.html',
  styleUrls: ['./type-card.component.css']
})
export class TypeCardComponent {

  @Input() pic: string = '';
  @Input() description: string = '';

}
