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
import { DashboardProvider, CategoriesProvider,  Auth } from '../providers';
import { AddCategory } from '../pages/categories/component/add-category';

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
    HomePage,
    AddCategory
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
    HomePage,
    AddCategory
  ],
  providers: [
    Auth,
    CategoriesProvider,
    DashboardProvider,
    AngularFireAuth,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DashboardProvider,
    CategoriesProvider
  ]
})
export class AppModule {}
