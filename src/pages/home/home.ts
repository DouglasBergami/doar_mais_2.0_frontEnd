import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { CampanhaPage } from '../campanha/campanha';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public menu: MenuController) {

  }

  ionViewWillEnter(){
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave(){
    this.menu.swipeEnable(true);
  }

  login(){
    this.navCtrl.setRoot(CampanhaPage);
  }

}
