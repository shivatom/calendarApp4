import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CategoriesProvider } from '../../providers';
import { Category } from '../../providers/categories/modal/category';
import { AngularFireDatabase } from 'angularfire2/database';
import { AddCategory } from './component/add-category';

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
  constructor(
    public navCtrl: NavController, 
    public modalCtrl: ModalController,
    private firebase:AngularFireDatabase, 
    private categoryServ:CategoriesProvider, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.categoryServ.getCustomersList().snapshotChanges().subscribe(data => { 
        this.categoryList = [];
        data.forEach(item => {
          let a = item.payload.toJSON(); 
          a['$key'] = item.key;
          this.categoryList.push(a as Category);
        })
      })
  }

  addCategory(){
    alert();
    const modal = this.modalCtrl.create(AddCategory);
    modal.present();
  }

}


 