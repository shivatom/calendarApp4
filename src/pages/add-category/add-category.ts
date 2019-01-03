import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesProvider } from '../../providers';


@IonicPage()
@Component({
  selector: 'page-add-category',
  templateUrl: 'add-category.html',
})
export class AddCategoryPage {
  categoryForm:FormGroup;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private viewCtrl:ViewController,
    private categoryServ:CategoriesProvider,
    public toastCtrl: ToastController,
    private fb:FormBuilder,) {
    this.categoryForm=fb.group({
      name:['',[Validators.required]],
      description:['',[Validators.required]]
    })
  }

  ionViewDidLoad(){
    const key = this.navParams.get('id');console.log(key);
    
    this.categoryServ.getByCategoryId(key).valueChanges().subscribe(response=>{
      this.categoryForm.setValue(response);
    })
  }

  createCategory(){
    this.categoryServ.createCategory(this.categoryForm.value);
    this.viewCtrl.dismiss();
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }
}
