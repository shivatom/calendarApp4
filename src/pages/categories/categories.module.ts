import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriesPage } from './categories';
import { SharedModule } from '../../app/shared/shared.module'

@NgModule({
  declarations: [
    CategoriesPage
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(CategoriesPage),
  ]
})
export class CategoriesPageModule {}
