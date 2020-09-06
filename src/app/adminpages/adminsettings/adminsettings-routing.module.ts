import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminsettingsPage } from './adminsettings.page';

const routes: Routes = [
  {
    path: '',
    component: AdminsettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminsettingsPageRoutingModule {}
