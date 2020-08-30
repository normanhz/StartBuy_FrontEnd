import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisternoticesPageRoutingModule } from './registernotices-routing.module';

import { RegisternoticesPage } from './registernotices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisternoticesPageRoutingModule
  ],
  declarations: [RegisternoticesPage]
})
export class RegisternoticesPageModule {}
