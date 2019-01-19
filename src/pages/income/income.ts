import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { IncomeProvider } from '../../providers/income/income';

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
  constructor(
    public navCtrl: NavController, 
    private fb:FormBuilder, 
    public navParams: NavParams,
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
    console.log('ionViewDidLoad IncomePage');
  }

  saveIncome(){
    this.incomeServ.saveIncome(this.incomeForm.value);
  }
}
