import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { NavBarComponent } from '../../components/nav-bar/nav-bar';

@NgModule({
  declarations: [
    ProfilePage,
    NavBarComponent
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
  ],
})
export class ProfilePageModule {}
