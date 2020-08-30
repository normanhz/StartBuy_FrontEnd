import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnviarsolicitudPage } from './enviarsolicitud.page';

const routes: Routes = [
  {
    path: '',
    component: EnviarsolicitudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnviarsolicitudPageRoutingModule {}
