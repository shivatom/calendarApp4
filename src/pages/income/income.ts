import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { IncomeProvider } from '../../providers/income/income';
import { CategoriesProvider } from '../../providers';
import { Category } from '../../providers/categories/modal/category';
import { IncomeAddPage } from '../income-add/income-add';
import { Income } from '../../providers/income/modal/income';

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
  incomeList;
  constructor(
    public navCtrl: NavController, 
    private fb:FormBuilder, 
    public navParams: NavParams,
    private modalCtrl:ModalController,
    private categoryServ:CategoriesProvider,
    private incomeServ:IncomeProvider
    ) {
    
    }

  ionViewDidLoad() {
    this.getExpensiveList();
  }

  addIncome(){
    const modal = this.modalCtrl.create(IncomeAddPage);
    modal.present();
  }

  getExpensiveList() {
    console.log('sd');
    
    this.incomeServ.getIncomeList().snapshotChanges().subscribe(data => { 
      this.incomeList = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.incomeList.push(a as Income);
        console.log(this.incomeList);
      })
    })
  }
  
  
}
