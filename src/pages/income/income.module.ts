import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IncomePage } from './income';
import { NavBarComponent } from '../../components/nav-bar/nav-bar';
import { SharedModule } from '../../app/shared/shared.module';

@NgModule({
  declarations: [
    IncomePage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(IncomePage),
  ],
})
export class IncomePageModule {}
