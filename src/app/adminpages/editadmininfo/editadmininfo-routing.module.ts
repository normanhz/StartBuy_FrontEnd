import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditadmininfoPage } from './editadmininfo.page';

const routes: Routes = [
  {
    path: '',
    component: EditadmininfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditadmininfoPageRoutingModule {}
