import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { NavController, NavParams, IonicPage, LoadingController, Navbar } from 'ionic-angular';

import { BrandsService } from './brands.service';

import { SelectSearchableModule } from 'ionic-select-searchable';

import { GlobalFunctions } from '../../functions/global.service';

@IonicPage({
  name: 'list-brands',
  segment: 'brands/list/:page'
})
@Component({
  selector: 'brands-list',
  templateUrl: 'list.html'
})
export class ListBrands implements AfterViewInit {
  @ViewChild(Navbar) navBar: Navbar;

  obj: any;
  entities: any;
  totalItems: any;
  pagination: any;
  errorMessage: string;
  page: number;
  nextPage: number;
  tp : any;
  icons: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private brandsService: BrandsService,
    private globalFunctions: GlobalFunctions,
  ) {

    
 
    this.icons = "brands";
    this.page = this.getCurrentPage();
   // this.nextPage = this.findNextPage(); 
  }


  loadEntities() {

    this.page = this.getCurrentPage();
    this.nextPage = this.page;

    let loader = this.globalFunctions.presentLoading(this.loadingCtrl, 1000);
    loader.present();
    this.brandsService.loadEntities(this.nextPage)

      .subscribe(data => {
        this.obj = data;
        this.entities = this.obj.data;

        this.totalItems = this.obj.totalItems;
        this.pagination = this.obj.pagination;

        if (this.totalItems == 0) {
        }

        this.nextPage = this.getCurrentPage()+1;
        loader.dismiss();
      },
        err => {

          console.log("Error in Brands list!");
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
    this.navCtrl.push('list-cars', {
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

    this.loadEntities();

  }
  


}