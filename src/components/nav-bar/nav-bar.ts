import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

/**
 * Generated class for the NavBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'nav-bar',
  templateUrl: 'nav-bar.html'
})
export class NavBarComponent {
  @Input('title') title;
  text: string;

  constructor() {
    
  }

}
