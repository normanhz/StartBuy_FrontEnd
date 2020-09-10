import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { IProductsInCart } from 'src/app/models/business.model';
import { DecimalPipe } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { AdminbusinessService } from '../../adminservices/adminbusiness.service';
import { IProductosVendidos } from 'src/app/models/adminbusiness.model';
import { AdminuserService } from 'src/app/adminservices/adminuser.service';
import { IUsuariosAsociados } from 'src/app/models/adminuser.model';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.page.html',
  styleUrls: ['./ventas.page.scss'],
})
export class VentasPage  implements OnInit {
  productosvendidos = new Array<IProductosVendidos>();
  empresaId: number;
  Totalvendido: any;
  usuariosocio= new Array<IUsuariosAsociados>();
  constructor(private router: Router,
    private usersService: UsersService,
    // tslint:disable-next-line: no-shadowed-variable
    public adminBusinessService: AdminbusinessService,
    public alertController: AlertController,
    private adminUserService: AdminuserService,
    private storage: Storage) { }
  public userName: string;
  public nombres: string;
  ngOnInit() {
  }



  ionViewWillEnter() {
    this.productosvendidos = [];
    this.storage.get('userAuth').then((data) => {
      this.userName = data.usuario;
      this.nombres = data.nombres;


      this.adminUserService.GetInfoUsuarioSocio(data.usuario, data.email).subscribe((usuariosocio)=>{
        this.usuariosocio = usuariosocio;
        this.empresaId = this.usuariosocio[0].empresaId;

        this.getProductosVendidos();
        this.getTotalVendidoByEmpresa();
      })
    });
  }

  getProductosVendidos() {

    this.adminBusinessService.getProductosVendidos(this.empresaId).subscribe((products) => {
      this.productosvendidos = products;
    });
  }

  getTotalVendidoByEmpresa() {
    this.adminBusinessService.getTotalVendidoByEmpresa(this.empresaId).subscribe((totalvendido) => {
      this.Totalvendido = Math.round(totalvendido).toFixed(2);
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
