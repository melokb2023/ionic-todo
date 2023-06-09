import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../src/app/add-item';
import { ItemDetailPage } from '../app/item-detail';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items = [];
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }
  ionViewDidLoad(){
  }
  addItem(){
    let addModal = this.modalCtrl.create(AddItemPage);
    addModal.onDidDismiss((item) => {
          if(item){
            this.saveItem(item);
          }
    });
    addModal.present();
  }
  saveItem(item){
    this.items.push(item);
  }
  viewItem(item){
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  
}