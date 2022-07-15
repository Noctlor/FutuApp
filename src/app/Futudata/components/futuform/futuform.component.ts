import { Component, Input } from '@angular/core';
import { Futurama } from '../../interface/futurama.interface';

@Component({
  selector: 'app-futuform',
  templateUrl: './futuform.component.html',
  styles: [
  ]
})
export class FutuformComponent {

  @Input() Futurama:Futurama[] = [];

  constructor() { }


}
