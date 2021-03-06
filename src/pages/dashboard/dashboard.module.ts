import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardPage } from './dashboard';
import { NavBarComponent } from '../../components/nav-bar/nav-bar';
import { SharedModule } from '../../app/shared/shared.module';

@NgModule({
  declarations: [
    DashboardPage
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(DashboardPage),
  ],
})
export class DashboardPageModule {}
