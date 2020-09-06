import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { IUsuarioPersona } from 'src/app/models/user.model';
import { Storage } from '@ionic/storage';
import { BusinessService } from '../../services/business.service';
import { IProductsInCart } from 'src/app/models/business.model';
import { DecimalPipe } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { IUsuario } from '../../models/user.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  productsInCart = new Array<IProductsInCart>();
  TotalCompra: any;
  userName: string;
  nombres: string;
  userid : number;
  usuariopersona= new Array<IUsuarioPersona>();
  constructor(private router: Router,
    private usersService: UsersService,
    // tslint:disable-next-line: no-shadowed-variable
    public BusinessService: BusinessService,
    public alertController: AlertController,
    private storage: Storage) { }

  ngOnInit() {
  }

  DeleteProductInCart(event){
    this.BusinessService.deleteProductInCart(event).subscribe((data) => {
      this.ionViewWillEnter();
    });
  }

  ionViewWillEnter() {
    this.productsInCart = [];
    this.storage.get('userAuth').then((data) => {
      this.userName = data.usuario;
      this.nombres = data.nombres;

      this.usersService.GetInfoUsuarioPersona(data.usuario, data.email).subscribe((usuariopersona)=>{
        this.usuariopersona = usuariopersona;
        this.userid = this.usuariopersona[0].usuarioPersonaId;

        this.getProductsInCart();
        this. getTotalCompraByUserId();
      })

    });
  }

  getProductsInCart() {
    this.BusinessService.getProductsInCart(this.userid).subscribe((products) => {
      this.productsInCart = products;
    });
  }

  getTotalCompraByUserId() {
      this.BusinessService.getTotalCompraByUserId(this.userid).subscribe((data) => {
        this.TotalCompra = Math.round(data).toFixed(2);
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
