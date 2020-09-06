import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'promotions',
        loadChildren: () => import('../pages/promotions/promotions.module').then(m => m.PromotionsPageModule)
      },
      {
        path: 'showcart',
        loadChildren: () => import('../pages/cart/cart.module').then(m => m.CartPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../pages/settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'adminhome',
        loadChildren: () => import('../adminpages/adminhome/adminhome.module').then(m => m.AdminhomePageModule)
      },
      {
        path: 'ventas',
        loadChildren: () => import('../adminpages/ventas/ventas.module').then(m => m.VentasPageModule)
      },
      {
        path: 'pendientes',
        loadChildren: () => import('../adminpages/pendientes/pendientes.module').then(m => m.PendientesPageModule)
      },
      {
        path: 'adminsettings',
        loadChildren: () => import('../adminpages/adminsettings/adminsettings.module').then(m => m.AdminsettingsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
