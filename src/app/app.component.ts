import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, AlertController, Nav, ToastController } from 'ionic-angular';


import { ListBrands } from '../pages/brands/list.component';
import { ListCars } from '../pages/cars/list.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = ListBrands;
  pages: Array<{ title: string, icon: string; component: any }>;
  platformName: any;
  actionUrl: any;
  
  constructor(
    public platform: Platform,
    public alertCtrl: AlertController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    //When the app's open, we'll show them as Toasts, but feel free to use an Alert instead
    public toastCtrl: ToastController
  ) {

    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', icon: "ios-people", component: ListBrands },
      { title: 'cars', icon: "ios-car", component: ListCars },
    ];
  }

  initializeApp() {

    //this.pushService.initPush(this.platformName);
    
    this.platform.ready().then(() => {

      
      
      if (this.platform.is("ios") || this.platform.is("android")) {

        if (this.platform.is("ios")) {
          this.platformName = "ios";
        }
        if (this.platform.is("android")) {
          this.platformName = "android";
        }

        
        
        
      }

      this.statusBar.styleDefault();
      setTimeout(() => {
        this.splashScreen.hide();
      }, 1000);

    });
  }

  

  openPage(page) {
    // navigate to the new page if it is not the current page
    this.nav.push(page.component);
  }


  


}
