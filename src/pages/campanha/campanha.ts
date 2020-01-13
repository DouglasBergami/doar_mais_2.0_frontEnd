import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CidadeProvider } from '../../providers/cidade/cidade';
import { cidadeDTO } from '../../models/cidade.dto';

/**
 * Generated class for the CampanhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-campanha',
  templateUrl: 'campanha.html',
})
export class CampanhaPage {

  cidadeDTO: cidadeDTO;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public cidadeProvider: CidadeProvider) {
  }

  ionViewDidLoad() {
    this.cidadeProvider.findAll().subscribe(
      result=>{
        (this.cidadeDTO = result)
      },
      error=>{}
    )
  }

}
