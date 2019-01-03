import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { CategoriesProvider } from '../../providers';
import { Category } from '../../providers/categories/modal/category';
import { HomePage } from '../home/home';
import { AddCategoryPage } from '../add-category/add-category';

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
    public alertCtrl: AlertController,
    private categoryServ:CategoriesProvider, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.categoryServ.getCategoryList().snapshotChanges().subscribe(data => { 
      this.categoryList = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.categoryList.push(a as Category);
      })
    })
  }

  deleteCategory(item){
    const alert=this.alertCtrl.create({
      title: 'Confirm Delete',
      message: 'Do you want to delete this category?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
           
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.categoryServ.deleteCategory(item.$key);
          }
        }
      ]
    });
    alert.present();
  }

  editCategory(item){
    const modal = this.modalCtrl.create(AddCategoryPage,{id: item.$key});
    modal.present();
  }

  addCategory(){
    const modal = this.modalCtrl.create(AddCategoryPage);
    modal.present();
  }

}


 