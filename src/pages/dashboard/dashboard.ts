import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { CategoriesProvider } from '../../providers';
import { Category } from '../../providers/categories/modal/category';

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
  
  constructor(public navCtrl: NavController,  private  menuContrl:MenuController, private categoryServ:CategoriesProvider,  public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
   // this.categoryServ.createCategory(this.categoriesList);
  }

  openPage(page){
    this.navCtrl.setRoot(page)
  }

}
