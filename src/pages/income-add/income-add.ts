import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { IncomeProvider } from '../../providers/income/income';
import { CategoriesProvider } from '../../providers';
import { Category } from '../../providers/categories/modal/category';

/**
 * Generated class for the IncomeAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-income-add',
  templateUrl: 'income-add.html',
})
export class IncomeAddPage {
  incomeForm;
  categoryList;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private fb:FormBuilder,
    private incomeServ:IncomeProvider,
    private categoryServ:CategoriesProvider
  ){
    this.incomeForm=this.fb.group({
      income_name:[],
      amount:[],
      date:[new Date().toISOString()],
      category_id:[]
    })
  }

  saveIncome(){
    this.incomeServ.saveIncome(this.incomeForm.value);
  }

  ionViewDidLoad() {
    this.getCategoryList();
    console.log('ionViewDidLoad IncomeAddPage');
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
