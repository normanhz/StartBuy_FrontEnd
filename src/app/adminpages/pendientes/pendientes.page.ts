import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { IProductsInCart } from 'src/app/models/business.model';
import { DecimalPipe } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { AdminbusinessService } from '../../adminservices/adminbusiness.service';
import { IProductosVendidos } from 'src/app/models/adminbusiness.model';
import { AdminuserService } from '../../adminservices/adminuser.service';
import { IUsuariosAsociados } from '../../models/adminuser.model';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.page.html',
  styleUrls: ['./pendientes.page.scss'],
})
export class PendientesPage  {
  productosvendidos = new Array<IProductosVendidos>();
  empresaId: number;
  public userName: string;
  public nombres: string;
  usuariosocio= new Array<IUsuariosAsociados>();
  constructor(private router: Router,
    private adminUserService: AdminuserService,
    // tslint:disable-next-line: no-shadowed-variable
    public adminBusinessService: AdminbusinessService,
    public alertController: AlertController,
    private storage: Storage) { }



  ionViewWillEnter() {
    this.productosvendidos = [];
    this.storage.get('userAuth').then((data) => {
      this.userName = data.usuario;
      this.nombres = data.nombres;

      this.adminUserService.GetInfoUsuarioSocio(data.usuario, data.email).subscribe((usuariosocio)=>{
        this.usuariosocio = usuariosocio;
        this.empresaId = this.usuariosocio[0].empresaId;

        this.getProductosPendientes();
      })
    });
  }

  getProductosPendientes() {

    this.adminBusinessService.getProductosPendientes(this.empresaId).subscribe((products) => {
      this.productosvendidos = products;
    });
  }

    async SuccessAlert(msj) {
      const alert = await this.alertController.create({
        header: 'Success',
        message: msj
      });
      await alert.present();
    }


}
