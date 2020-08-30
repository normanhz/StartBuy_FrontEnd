import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnviarsolicitudPageRoutingModule } from './enviarsolicitud-routing.module';

import { EnviarsolicitudPage } from './enviarsolicitud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EnviarsolicitudPageRoutingModule
  ],
  declarations: [EnviarsolicitudPage]
})
export class EnviarsolicitudPageModule {}
