import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, LoadingController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

import { BrandsService } from './brands.service';
import { GlobalFunctions } from '../../functions/global.service';

@IonicPage(
  {
    name: 'show-brands',
    segment: 'brands/show/:id'
  }
)
@Component({
  selector: 'brands-show',
  templateUrl: 'show.html'
})
export class ShowBrands {

  entity: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private callNumber: CallNumber,
    public loadingCtrl: LoadingController,
    private globalFunctions: GlobalFunctions,
    private brandsService: BrandsService,
  ) {

    this.showEntity(navParams.get("id"));
  }


  showEntity(id: number) {
    let loader = this.globalFunctions.presentLoading(this.loadingCtrl, 1000);
    loader.present();
    this.brandsService.showEntity(id)
      .subscribe(data => {

        this.entity = data;
        loader.dismiss();
      },
        err => { 
          console.log("Error in Members Show!");
        }
      )

  };

  executeCallNumber(event, phoneNumber) {
    this.callNumber.callNumber(phoneNumber, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}
