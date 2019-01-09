import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Category } from '../../providers/categories/modal/category';
import { CategoriesProvider } from '../../providers';

/**
 * Generated class for the ExpensivesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expensives',
  templateUrl: 'expensives.html',
})
export class ExpensivesPage {
  categoryList;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private categoryServ:CategoriesProvider
  ) {
  }

  ionViewDidLoad() {
    this.getCategoryList();
  }

  saveExpensive(){
    
  }

  getCategoryList(){
    this.categoryServ.getCategoryList().snapshotChanges().subscribe(data => { 
      this.categoryList = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.categoryList.push(a as Category);
      })
      
    })
  }
}
