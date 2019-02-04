import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesProvider } from '../../providers';
import { e } from '@angular/core/src/render3';


@IonicPage()
@Component({
  selector: 'page-add-category',
  templateUrl: 'add-category.html',
})
export class AddCategoryPage {
  categoryForm:FormGroup;
  id;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private viewCtrl:ViewController,
    private categoryServ:CategoriesProvider,
    public toastCtrl: ToastController,
    private fb:FormBuilder,) {
    this.categoryForm=fb.group({
      category_name:['',[Validators.required]],
      category_type:['income'],
      category_description:['',[Validators.required]]
    })
  }

  ionViewDidLoad(){
    this.id = this.navParams.get('id');console.log(this.id);
    if(this.id)
    this.categoryServ.getByCategoryId(this.id).valueChanges().subscribe(response=>{
      this.categoryForm.setValue(response);
    })
  }

  createCategory(){
    if(this.id){
      this.categoryServ.updateCategory(this.id,this.categoryForm.value);
    }else{
      this.categoryServ.createCategory(this.categoryForm.value);
    }
    this.viewCtrl.dismiss();
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }
}
