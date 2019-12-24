import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { BrandsService } from './brands.service'; 
import { ListBrands } from './list.component'; 

import { SelectSearchableModule } from 'ionic-select-searchable';


@NgModule({
    declarations: [
        ListBrands, 
    ],
    imports: [
        IonicPageModule.forChild(ListBrands),
        SelectSearchableModule
       
    ],
    entryComponents: [
        ListBrands, 
    ],
    providers: [
         BrandsService,
         HTTP,
      ]
})
export class ListBrandsModule { }