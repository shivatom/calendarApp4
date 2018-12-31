import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireList } from 'angularfire2/database';
import { Category } from '../../providers/api/Category';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  categories$;
  constructor(public navCtrl: NavController, private category:Category, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.categories$=this.category.getAllCategory();
  }

}
