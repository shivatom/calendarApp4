import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpensivesAddPage } from './expensives-add';

@NgModule({
  declarations: [
    ExpensivesAddPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpensivesAddPage),
  ],
})
export class ExpensivesAddPageModule {}
