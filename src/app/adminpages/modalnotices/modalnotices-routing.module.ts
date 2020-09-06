import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalnoticesPage } from './modalnotices.page';

const routes: Routes = [
  {
    path: '',
    component: ModalnoticesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalnoticesPageRoutingModule {}
