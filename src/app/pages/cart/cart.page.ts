import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user.model';
import { Storage } from '@ionic/storage';
import { BusinessService } from '../../services/business.service';
import { IProductsInCart } from 'src/app/models/business.model';
import { DecimalPipe } from '@angular/common';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  productsInCart = new Array<IProductsInCart>();
  TotalCompra: any;
  constructor(private router: Router,
    private usersService: UsersService,
    // tslint:disable-next-line: no-shadowed-variable
    public BusinessService: BusinessService,
    public alertController: AlertController,
    private storage: Storage) { }
  public user: IUser;
  public userName: string;
  public nombres: string;

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
      this.user = data
      this.userName = this.user.usuario;
      this.nombres = this.user.nombres;

      this.getProductsInCart();
      this. getTotalCompraByUserId();
    });
  }

  getProductsInCart() {
  // console.log(this.productsInCart);
  //  const isv = 0.15;
    this.BusinessService.getProductsInCart(this.user.usuarioPersonaId).subscribe((products) => {
      this.productsInCart = products;
      console.log(this.productsInCart);
    });
  }

  getTotalCompraByUserId() {
      this.BusinessService.getTotalCompraByUserId(this.user.usuarioPersonaId).subscribe((data) => {
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
