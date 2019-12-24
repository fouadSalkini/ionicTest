import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

import { BrandsService } from './brands.service';
import { ShowBrands } from './show.component';


@NgModule({
    declarations: [
        ShowBrands
    ],
    imports: [
        IonicPageModule.forChild(ShowBrands)
    ],
    entryComponents: [
        ShowBrands
    ],
    providers: [
        BrandsService,
        CallNumber,
    ]
})
export class ShowBrandsModule { }