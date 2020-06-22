import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductbybusinessPageRoutingModule } from './productbybusiness-routing.module';

import { ProductbybusinessPage } from './productbybusiness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductbybusinessPageRoutingModule
  ],
  declarations: [ProductbybusinessPage]
})
export class ProductbybusinessPageModule {}
