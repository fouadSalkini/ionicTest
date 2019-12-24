import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { CarsService } from './cars.service'; 
import { ListCars } from './list.component'; 

import { SelectSearchableModule } from 'ionic-select-searchable';


@NgModule({
    declarations: [
        ListCars, 
    ],
    imports: [
        IonicPageModule.forChild(ListCars),
        SelectSearchableModule
       
    ],
    entryComponents: [
        ListCars, 
    ],
    providers: [
         CarsService,
         HTTP,
      ]
})
export class ListCarsModule { }