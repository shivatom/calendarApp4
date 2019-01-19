import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { ExpensiveProvider } from '../../providers/expensive/expensive';
import { CategoriesProvider } from '../../providers';
import { Category } from '../../providers/categories/modal/category';

/**
 * Generated class for the ExpensivesAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expensives-add',
  templateUrl: 'expensives-add.html',
})
export class ExpensivesAddPage {
  expensiveForm;
  categoryList;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private fb:FormBuilder,
    private categoryServ:CategoriesProvider,
    public expServ:ExpensiveProvider,
    private viewCtrl:ViewController,) 
    {
      this.expensiveForm=this.fb.group({
        expname:[],
        amount:[],
        date:[],
        category_id:[]
      })
   }

  ionViewDidLoad() {
    this.getCategoryList();
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

  saveExpensive(){
    this.expServ.saveExpensive(this.expensiveForm.value);
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }
}
