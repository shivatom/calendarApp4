import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Category } from './modal/category';

@Injectable()
export class CategoriesProvider {
    private dbPath = 'categories';
    private customersRef: AngularFireList<Category> = null;
  
    constructor(private db: AngularFireDatabase) {
      this.customersRef = db.list(this.dbPath);
    }
  
    createCategory(customer: Category): void {
      this.customersRef.push(customer);
    }
  
    // updateCustomer(key: string, value: any): void {
    //   this.customersRef.update(key, value).catch(error => this.handleError(error));
    // }
  
    deleteCategory(key: string): void {
      this.customersRef.remove(key).catch(error => this.handleError(error));
    }
    
    getByCategoryId(id){

    }
    
    getCategoryList(): AngularFireList<Category> {
      return this.customersRef;
    }
  
    // deleteAll(): void {
    //   this.customersRef.remove().catch(error => this.handleError(error));
    // }
  
    private handleError(error) {
      console.log(error);
    }
}
