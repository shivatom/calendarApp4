import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpensivesPage } from './expensives';
import { NavBarComponent } from '../../components/nav-bar/nav-bar';
import { SharedModule } from '../../app/shared/shared.module';
import { FilterDataPipe } from '../../providers/pipes/filter-data-pipe';

@NgModule({
  declarations: [
    ExpensivesPage,
    FilterDataPipe
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(ExpensivesPage),
  ],
  providers:[
    
  ]
})
export class ExpensivesPageModule {}
