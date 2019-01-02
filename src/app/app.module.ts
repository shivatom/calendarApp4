import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { Category, Auth } from '../providers';

const  firebaseConfig = {
  apiKey: "AIzaSyDjQP6Z7tTD4i2eWEe9Xg16U1jaUJnFFks",
  authDomain: "event-dcb8e.firebaseapp.com",
  databaseURL: "https://event-dcb8e.firebaseio.com",
  projectId: "event-dcb8e",
  storageBucket: "event-dcb8e.appspot.com",
  messagingSenderId: "504391773648"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    Auth,
    Category,
    AngularFireAuth,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
