import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Category } from '../../providers/categories/modal/category';
import { CategoriesProvider } from '../../providers';
import { ExpensiveProvider } from '../../providers/expensive/expensive';
import { FormBuilder } from '@angular/forms';
import { Expensive } from '../../providers/expensive/modal/expensive';

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
    private fb:FormBuilder,
    private categoryServ:CategoriesProvider
  ) {
    this.expensiveForm=this.fb.group({
      expname:[],
      amount:[],
      date:[],
      category_id:[]
    })
  }

  ionViewDidLoad() {
    this.getExpensiveList();
    this.getCategoryList();
  }
  
  addExpensive(){
    const modal = this.modalCtrl.create(AddCategoryPage);
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

  saveExpensive(){
    this.expServ.saveExpensive(this.expensiveForm.value);
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
