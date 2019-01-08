import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, ViewController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { FirstRunPage } from '../pages';
import { DashboardPage } from '../pages/dashboard/dashboard';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav: NavController
  
  rootPage:any = HomePage;

  constructor(platform: Platform, private  menuContrl:MenuController, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page){
    console.log(page+' Loaded');
    this.menuContrl.close();
    this.nav.setRoot(page)
    
  }
}

