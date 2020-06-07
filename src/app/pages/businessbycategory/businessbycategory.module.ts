import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessbycategoryPageRoutingModule } from './businessbycategory-routing.module';

import { BusinessbycategoryPage } from './businessbycategory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessbycategoryPageRoutingModule
  ],
  declarations: [BusinessbycategoryPage]
})
export class BusinessbycategoryPageModule {}
