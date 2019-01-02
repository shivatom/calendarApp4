import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriesProvider } from '../../providers';
import { Category } from '../../providers/categories/modal/category';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
  categoryList;
  songList;
  constructor(public navCtrl: NavController, private firebase:AngularFireDatabase, private categoryServ:CategoriesProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {

    let s = this.firebase.list('categories');
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      
      
    })

    // this.categoryServ.getCustomersList().snapshotChanges().subscribe(data => { 
    //     this.categoryList = [];
    //     data.forEach(item => {
    //       let a = item.payload.toJSON(); 
    //       a['$key'] = item.key;
    //       this.categoryList.push(a as Category);
    //       console.log(this.categoryList);
          
    //     })
    //   })
  }

}


 // let s = this.firebase.list('songs');
    // s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
    //   this.songList = [];
    //   data.forEach(item => {
    //     let a = item.payload.toJSON(); 
    //     a['$key'] = item.key;
    //     this.songList.push(a as Student);
    //   })
    // })
    // this.songList.push({
    //   name:"shiva1",
    //   songs:"tera bna"
    // })