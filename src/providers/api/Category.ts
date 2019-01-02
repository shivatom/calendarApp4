import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Api is a generic REST Api handler. Set your API url first.
 */
export class Customer {
  key: string;
  name: string;
  age: number;
  active = true;
}

@Injectable()
export class Category {
  private dbPath = '/songs';
 
  customersRef: AngularFireList<Customer> = null;
 
  constructor(private db: AngularFireDatabase) {
    this.customersRef = db.list(this.dbPath);
  }
 
  createCustomer(customer: Customer): void {
    this.customersRef.push(customer);
  }
 
  updateCustomer(key: string, value: any): void {
    this.customersRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteCustomer(key: string): void {
    this.customersRef.remove(key).catch(error => this.handleError(error));
  }
 
  getCustomersList(): AngularFireList<Customer> {
    return this.customersRef;
  }
 
  deleteAll(): void {
    this.customersRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }
}
