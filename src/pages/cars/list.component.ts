import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { NavController, NavParams, IonicPage, LoadingController, Navbar } from 'ionic-angular';

import { CarsService } from './cars.service';

import { SelectSearchableModule } from 'ionic-select-searchable';

import { GlobalFunctions } from '../../functions/global.service';

@IonicPage({
  name: 'list-cars',
  segment: 'cars/list/:id'
})
@Component({
  selector: 'cars-list',
  templateUrl: 'list.html'
})
export class ListCars implements AfterViewInit {
  @ViewChild(Navbar) navBar: Navbar;

  obj: any;
  entities: any;
  totalItems: any;
  brand: any;
  pagination: any;
  errorMessage: string;
  page: number;
  nextPage: number;
  tp : any;
  icons: any;
  navPar:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private carsService: CarsService,
    private globalFunctions: GlobalFunctions,
  ) {

    this.navPar = navParams;
 
    this.icons = "cars";
    this.page = this.getCurrentPage();
   // this.nextPage = this.findNextPage(); 
  }


  loadEntities(id:any) {

    this.page = this.getCurrentPage();
    this.nextPage = this.page;

    let loader = this.globalFunctions.presentLoading(this.loadingCtrl, 1000);
    loader.present();
    this.carsService.loadEntities(this.nextPage, id)

      .subscribe(data => {
        this.obj = data;
        this.entities = this.obj.data;

        this.totalItems = this.obj.totalItems;
        this.pagination = this.obj.pagination;
        this.brand = this.obj.brand;

        if (this.totalItems == 0) {
        }

        this.nextPage = this.getCurrentPage()+1;
        loader.dismiss();
      },
        err => {

          console.log("Error in Cars list!");
        }
      )
  };

  goToNextPage(event, nextPage) {
    
    this.page = this.getCurrentPage();
      
    // this.loadEntities(nextPage, this.searchModel);
    this.nextPage = this.page + 1;
    this.navCtrl.push('list-members', {
      'page': this.nextPage
    });
  }

  showEntity(event, id) {
    this.navCtrl.push('show-cars', {
      'id': id
    });
  }

  


  getCurrentPage() {
    this.page =  parseInt(this.navParams.get("page"));
    if (!this.page ||  this.page < 1)
      this.page = 1;
 
    return this.page;
  }

  findNextPage() {
    
    
  }

  
  ngAfterViewInit() {

    this.loadEntities(this.navParams.get("id"));

  }
  


}