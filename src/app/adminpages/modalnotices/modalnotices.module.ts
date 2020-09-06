import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalnoticesPageRoutingModule } from './modalnotices-routing.module';

import { ModalnoticesPage } from './modalnotices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ModalnoticesPageRoutingModule
  ],
  declarations: [ModalnoticesPage]
})
export class ModalnoticesPageModule {}
