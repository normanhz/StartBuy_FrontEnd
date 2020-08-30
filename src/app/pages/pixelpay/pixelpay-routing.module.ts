import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PixelpayPage } from './pixelpay.page';

const routes: Routes = [
  {
    path: '',
    component: PixelpayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PixelpayPageRoutingModule {}
