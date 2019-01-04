import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriesPage } from './categories';
import { NavBarComponent } from '../../components/nav-bar/nav-bar';

@NgModule({
  declarations: [
    CategoriesPage,
    NavBarComponent
  ],
  imports: [
    IonicPageModule.forChild(CategoriesPage),
  ],
})
export class CategoriesPageModule {}
