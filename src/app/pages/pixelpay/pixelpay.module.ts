import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PixelpayPageRoutingModule } from './pixelpay-routing.module';

import { PixelpayPage } from './pixelpay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PixelpayPageRoutingModule
  ],
  declarations: [PixelpayPage]
})
export class PixelpayPageModule {}
