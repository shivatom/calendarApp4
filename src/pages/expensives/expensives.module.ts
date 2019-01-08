import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpensivesPage } from './expensives';
import { NavBarComponent } from '../../components/nav-bar/nav-bar';
import { SharedModule } from '../../app/shared/shared.module';

@NgModule({
  declarations: [
    ExpensivesPage
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(ExpensivesPage),
  ],
})
export class ExpensivesPageModule {}
