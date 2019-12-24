import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, IonicPage, LoadingController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

import { CarsService } from './cars.service';
import { GlobalFunctions } from '../../functions/global.service';

declare var google;

@IonicPage(
  {
    name: 'show-cars',
    segment: 'cars/show/:id'
  }
)
@Component({
  selector: 'cars-show',
  templateUrl: 'show.html'
})
export class ShowCars {

  @ViewChild('map') mapElement: ElementRef;

  entity: any;
  map: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private callNumber: CallNumber,
    public loadingCtrl: LoadingController,
    private globalFunctions: GlobalFunctions,
    private carsService: CarsService,
  ) {

    this.showEntity(navParams.get("id"));
  }


  showEntity(id: number) {
    let loader = this.globalFunctions.presentLoading(this.loadingCtrl, 1000);
    loader.present();
    this.carsService.showEntity(id)
      .subscribe(data => {

        this.entity = data;
        loader.dismiss();
        this.loadMap();
      },
        err => { 
          console.log("Error in Members Show!");
        }
      )

  };

  loadMap() {

    let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    let infowindow = new google.maps.InfoWindow();

    this.entity.branches.forEach((branch: any) => {

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(branch.latitude, branch.longitude),
        title: branch.name,
        label: branch.name,
        map: this.map,
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        }
      });

      this.map.setCenter(marker.getPosition());


      google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent('<div><strong>'+ branch.name +'</strong><br>' +
           branch.address +'</div>');
        infowindow.open(this.map, this);
      });

    });
    

    

  }

  executeCallNumber(event, phoneNumber) {
    this.callNumber.callNumber(phoneNumber, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}

