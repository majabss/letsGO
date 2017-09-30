import { Component, Input } from '@angular/core';

/**
 * Generated class for the ListItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-list-item',
  templateUrl: 'list-item.html'
})
export class ListItemComponent {
  
  @Input() public mainText: string;
  @Input() public additionalText: string;
  @Input() public secondRowText: string;


  constructor() { }

}
