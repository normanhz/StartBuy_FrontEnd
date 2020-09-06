import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { IProductsInCart } from 'src/app/models/business.model';
import { DecimalPipe } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { AdminbusinessService } from '../../adminservices/adminbusiness.service';
import { IProductosChange } from 'src/app/models/adminbusiness.model';
import { AdminuserService } from '../../adminservices/adminuser.service';
import { IUsuariosAsociados } from '../../models/adminuser.model';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.page.html',
  styleUrls: ['./viewproducts.page.scss'],
})
export class ViewproductsPage implements OnInit {
  productoschange = new Array<IProductosChange>();
  empresaId: number;
  TotalCompra: any;
  public userName: string;
  public filtername : string;
  public nombres: string;
  usuariosocio= new Array<IUsuariosAsociados>();
  constructor(private router: Router,
    private adminUserService: AdminuserService,
    // tslint:disable-next-line: no-shadowed-variable
    public adminBusinessService: AdminbusinessService,
    public alertController: AlertController,
    private storage: Storage) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.productoschange = [];
    this.storage.get('userAuth').then((data) => {
      this.userName = data.usuario;
      this.nombres = data.nombres;

      this.adminUserService.GetInfoUsuarioSocio(data.usuario, data.email).subscribe((usuariosocio)=>{
        this.usuariosocio = usuariosocio;
        this.empresaId = this.usuariosocio[0].empresaId;

        this.getProductosByEmpresaId();
      })
    });
  }

  getProductosByEmpresaId() {

    this.adminBusinessService.getProductosByEmpresaId(this.empresaId).subscribe((products) => {
        if(this.filtername)
        {
          this.productoschange = products.filter(item => {
            // tslint:disable-next-line: quotemark
            return item.producto.toUpperCase().indexOf(this.filtername.toUpperCase()) > -1;
          });
        }
        else
        {
          return this.productoschange = products;
        }
    });
  }

  async filterCards(event)
  {
    this.filtername = event.target.value;
    this.getProductosByEmpresaId();
  }


    async SuccessAlert(msj) {
      const alert = await this.alertController.create({
        header: 'Success',
        message: msj
      });
      await alert.present();
    }

    changeEstado(event, productoid){
      const value = event.detail.checked;
      const prdId = productoid;

      this.adminBusinessService.EditEstadoProducto(prdId, value).subscribe(()=>{
      });
    }

}
