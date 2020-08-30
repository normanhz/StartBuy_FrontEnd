import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user.model';
import { Storage } from '@ionic/storage';
import { IProductsInCart } from 'src/app/models/business.model';
import { DecimalPipe } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { AdminbusinessService } from '../../adminservices/adminbusiness.service';
import { IProductosVendidos } from 'src/app/models/adminbusiness.model';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.page.html',
  styleUrls: ['./ventas.page.scss'],
})
export class VentasPage  implements OnInit {
  productosvendidos = new Array<IProductosVendidos>();
  empresaId: number;
  TotalCompra: any;
  constructor(private router: Router,
    private usersService: UsersService,
    // tslint:disable-next-line: no-shadowed-variable
    public adminBusinessService: AdminbusinessService,
    public alertController: AlertController,
    private storage: Storage) { }
  public user: IUser;
  public userName: string;
  public nombres: string;
  ngOnInit() {
  }

  // DeleteProductInCart(event){
  //   this.BusinessService.deleteProductInCart(event).subscribe((data) => {
  //     this.ionViewWillEnter();
  //   });
  // }

  ionViewWillEnter() {
    this.productosvendidos = [];
    this.storage.get('userAuth').then((data) => {
      this.user = data
      this.userName = this.user.usuario;
      this.nombres = this.user.nombres;
      this.empresaId = 17;
      this.getProductosVendidos();
      // tslint:disable-next-line: comment-format
      //this. getTotalCompraByUserId();
    });
  }

  getProductosVendidos() {
  // console.log(this.productsInCart);
  //  const isv = 0.15;
    this.adminBusinessService.getProductosVendidos(this.empresaId).subscribe((products) => {
      this.productosvendidos = products;
      console.log(this.productosvendidos);
    });
  }

  // getTotalCompraByUserId() {
  //     this.BusinessService.getTotalCompraByUserId(this.user.usuarioPersonaId).subscribe((data) => {
  //       this.TotalCompra = Math.round(data).toFixed(2);
  //     });
  //   }

    async SuccessAlert(msj) {
      const alert = await this.alertController.create({
        header: 'Success',
        message: msj
      });
      await alert.present();
    }

}
