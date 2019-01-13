import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Expensive } from './modal/expensive';


@Injectable()
export class ExpensiveProvider {
  private dbPath = 'expensive';
  private expensiveRef: AngularFireList<Expensive> = null;
  constructor(private db: AngularFireDatabase) {
    this.expensiveRef = db.list(this.dbPath);
  }

  saveExpensive(customer: Expensive): void {
    this.expensiveRef.push(customer);
  }

  getExpensiveList(): AngularFireList<Expensive> {
    return this.expensiveRef;
  }

}
