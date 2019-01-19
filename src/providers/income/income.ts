import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Income } from './modal/income';

/*
  Generated class for the IncomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IncomeProvider {
  private dbPath = 'income';
  private expensiveRef: AngularFireList<Income> = null;
  constructor(private db: AngularFireDatabase) {
    this.expensiveRef = db.list(this.dbPath);
  }

  saveIncome(customer: Income): void {
    this.expensiveRef.push(customer);
  }

  getIncomeList(): AngularFireList<Income> {
    return this.expensiveRef;
  }
}
