import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisternoticesPage } from './registernotices.page';

const routes: Routes = [
  {
    path: '',
    component: RegisternoticesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisternoticesPageRoutingModule {}
