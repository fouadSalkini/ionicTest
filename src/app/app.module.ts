import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Device } from '@ionic-native/device';
import { Sim } from '@ionic-native/sim';
import { SelectSearchableModule } from 'ionic-select-searchable';
import { MyApp } from './app.component';
//
//
import { GlobalFunctions } from '../functions/global.service';
//
import { ListBrandsModule } from '../pages/brands/list.component.module';
import { ListCarsModule } from '../pages/cars/list.component.module';
//
//
//

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    SelectSearchableModule,
    //
    HttpModule,
    ListBrandsModule,   
    ListCarsModule,   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Device,
    Sim,
    GlobalFunctions,
  ]
})
export class AppModule { }
