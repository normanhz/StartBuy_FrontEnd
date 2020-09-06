import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditadmininfoPageRoutingModule } from './editadmininfo-routing.module';

import { EditadmininfoPage } from './editadmininfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditadmininfoPageRoutingModule
  ],
  declarations: [EditadmininfoPage]
})
export class EditadmininfoPageModule {}
