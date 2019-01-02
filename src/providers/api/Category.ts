import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Category {
  //url: string = 'https://example.com/api/v1';

  constructor(private db:AngularFireDatabase, private fireAuth:AngularFireAuth) {
  }

  getAllCategory():AngularFireList<any>{
    return this.db.list('/songs');
  }
  
}
