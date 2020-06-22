import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductbybusinessPage } from './productbybusiness.page';

const routes: Routes = [
  {
    path: '',
    component: ProductbybusinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductbybusinessPageRoutingModule {}
