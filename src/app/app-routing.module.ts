import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';
import { LoginGuardService } from './guards/login-guard.service';
import { AdminauthGuardService } from './adminguards/adminauth-guard.service';
import { AdminloginGuardService } from './adminguards/adminlogin-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: './tabs/tabs.module#TabsPageModule',
    canActivate: [AuthGuardService],
  },
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [LoginGuardService]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./pages/verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'businessbycategory',
    loadChildren: () => import('./pages/businessbycategory/businessbycategory.module').then( m => m.BusinessbycategoryPageModule)
  },
  {
    path: 'promotions',
    loadChildren: () => import('./pages/promotions/promotions.module').then( m => m.PromotionsPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'edituserinfo',
    loadChildren: () => import('./pages/edituserinfo/edituserinfo.module').then( m => m.EdituserinfoPageModule)
  },
  {
    path: 'productbybusiness',
    loadChildren: () => import('./pages/productbybusiness/productbybusiness.module').then( m => m.ProductbybusinessPageModule)
  },
  {
    path: 'detailproduct',
    loadChildren: () => import('./pages/detailproduct/detailproduct.module').then( m => m.DetailproductPageModule)
  },
  {
    path: 'pixelpay',
    loadChildren: () => import('./pages/pixelpay/pixelpay.module').then( m => m.PixelpayPageModule)
  },
  {
    path: 'adminhome',
    loadChildren: () => import('./adminpages/adminhome/adminhome.module').then( m => m.AdminhomePageModule)
  },
  {
    path: 'pendientes',
    loadChildren: () => import('./adminpages/pendientes/pendientes.module').then( m => m.PendientesPageModule)
  },
  {
    path: 'ventas',
    loadChildren: () => import('./adminpages/ventas/ventas.module').then( m => m.VentasPageModule)
  },
  {
    path: 'registernotices',
    loadChildren: () => import('./adminpages/registernotices/registernotices.module').then( m => m.RegisternoticesPageModule)
  },
  {
    path: 'enviarsolicitud',
    loadChildren: () => import('./adminpages/enviarsolicitud/enviarsolicitud.module').then( m => m.EnviarsolicitudPageModule)
  },
  {
    path: 'modalnotices',
    loadChildren: () => import('./adminpages/modalnotices/modalnotices.module').then( m => m.ModalnoticesPageModule)
  },
  {
    path: 'viewproducts',
    loadChildren: () => import('./adminpages/viewproducts/viewproducts.module').then( m => m.ViewproductsPageModule)
  },
  {
    path: 'adminsettings',
    loadChildren: () => import('./adminpages/adminsettings/adminsettings.module').then( m => m.AdminsettingsPageModule)
  },
  {
    path: 'editadmininfo',
    loadChildren: () => import('./adminpages/editadmininfo/editadmininfo.module').then( m => m.EditadmininfoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
