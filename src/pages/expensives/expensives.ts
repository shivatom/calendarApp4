import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Category } from '../../providers/categories/modal/category';
import { CategoriesProvider } from '../../providers';
import { ExpensiveProvider } from '../../providers/expensive/expensive';
import { FormBuilder } from '@angular/forms';
import { Expensive } from '../../providers/expensive/modal/expensive';
import { ExpensivesAddPage } from '../expensives-add/expensives-add';

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
  expensiveList;
  expensiveForm;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public expServ:ExpensiveProvider,
    private modalCtrl:ModalController,
    private categoryServ:CategoriesProvider
  ) {
    
  }

  ionViewDidLoad() {
    this.getExpensiveList(); 
  }
  
  addExpensive(){
    const modal = this.modalCtrl.create(ExpensivesAddPage);
    modal.present();
  }

  getExpensiveList() {
    this.expServ.getExpensiveList().snapshotChanges().subscribe(data => { 
      this.expensiveList = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.expensiveList.push(a as Expensive);
      })
    })
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
