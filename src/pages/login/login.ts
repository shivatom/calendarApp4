import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { MainPage } from '../';
import { FormBuilder, Validators } from '@angular/forms';
import { Auth } from '../../providers';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { DashboardPage } from '../dashboard/dashboard';

export interface Student {
  $key: string;
  firstName: string;
  lastName: string;
  email: string
  mobileNumber: Number;
}

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
 

  // Our translated text strings
  private loginErrorString: string;
  loginForm;
  list;
  songList;
  constructor(public navCtrl: NavController,
    public auth: Auth,
    public toastCtrl: ToastController,
    private firebase:AngularFireDatabase,
    private fb:FormBuilder,) {
    this.loginForm=fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
       
  }

  // Attempt to login in through our User service
  doLogin() {
    let email = this.loginForm.get('email').value;
    let password =this.loginForm.get('password').value;
   
    this.auth.signin(email,password).then((user) => {
      this.navCtrl.push(DashboardPage);
    })
    .catch(err => {
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: err.message,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}
