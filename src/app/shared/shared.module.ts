import { NgModule } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar';
import { IonicModule } from 'ionic-angular';

@NgModule({
  imports: [ IonicModule ],
  declarations: [
    NavBarComponent
  ],
  providers: [],
  exports: [
    NavBarComponent
  ]
})
export class SharedModule { }