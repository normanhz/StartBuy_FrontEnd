import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminsettingsPageRoutingModule } from './adminsettings-routing.module';

import { AdminsettingsPage } from './adminsettings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminsettingsPageRoutingModule
  ],
  declarations: [AdminsettingsPage]
})
export class AdminsettingsPageModule {}
