import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessbycategoryPage } from './businessbycategory.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessbycategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessbycategoryPageRoutingModule {}
