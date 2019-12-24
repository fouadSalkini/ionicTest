import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

import { CarsService } from './cars.service';
import { ShowCars } from './show.component';


@NgModule({
    declarations: [
        ShowCars
    ],
    imports: [
        IonicPageModule.forChild(ShowCars)
    ],
    entryComponents: [
        ShowCars
    ],
    providers: [
        CarsService,
        CallNumber,
    ]
})
export class ShowCarsModule { }