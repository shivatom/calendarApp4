import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { IncomeProvider } from '../../providers/income/income';
import { CategoriesProvider } from '../../providers';
import { Category } from '../../providers/categories/modal/category';

/**
 * Generated class for the IncomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-income',
  templateUrl: 'income.html',
})
export class IncomePage {
  incomeForm;
  categoryList;
  constructor(
    public navCtrl: NavController, 
    private fb:FormBuilder, 
    public navParams: NavParams,
    private categoryServ:CategoriesProvider,
    private incomeServ:IncomeProvider
    ) {
    this.incomeForm=this.fb.group({
      income_name:[],
      amount:[],
      date:[],
      category_id:[]
    })
  }

  ionViewDidLoad() {
    this.getCategoryList();
  }

  saveIncome(){
    this.incomeServ.saveIncome(this.incomeForm.value);
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
