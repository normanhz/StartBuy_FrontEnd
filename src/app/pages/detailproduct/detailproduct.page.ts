import { Component, OnInit } from '@angular/core';
import { IUsuarioPersona } from 'src/app/models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController, IonSlides } from '@ionic/angular';
import { BusinessService } from '../../services/business.service';
import { Storage } from '@ionic/storage';
import { IProducts } from '../../models/business.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.page.html',
  styleUrls: ['./detailproduct.page.scss'],
})
export class DetailproductPage implements OnInit {
  public currentNumber: number;
  public userName: string;
  public nombres: string;
  products: IProducts[] = [];
  public productoId :  number;
  alert: any;
  cantidadEnStock: number;
  usuariopersona= new Array<IUsuarioPersona>();
  constructor(private router: Router,
    private route: ActivatedRoute,
    public alertController: AlertController,
    // tslint:disable-next-line: no-shadowed-variable
    public BusinessService: BusinessService,
    public loadingController: LoadingController,
    private usersService: UsersService,
    public storage: Storage) {
      // tslint:disable-next-line: no-string-literal
      this.productoId = this.route.snapshot.queryParams['productoId'];
      this.currentNumber = 0;
     }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.storage.get('userAuth').then((data) => {
      this.userName = data.usuario;
      this.nombres = data.nombres;

      this.usersService.GetInfoUsuarioPersona(data.usuario, data.email).subscribe((usuariopersona)=>{
        this.usuariopersona = usuariopersona;
      })

    });

    this.currentNumber = 0;
    this.getProductById();
  }

  public increment () {
    this.currentNumber++;

  }
  public decrement () {
    this.currentNumber--;

       if(this.currentNumber < 0)
       { this.currentNumber = 0 }
  }
  getProductById() {
    this.BusinessService.getProductById(this.productoId).subscribe((products) => {
      this.products = products;
      this.cantidadEnStock = this.products[0].cantidadEnStock;
    });
  }

  AddtoCart(event)
  {

    if(this.currentNumber < 1)
    {
      // tslint:disable-next-line: quotemark
      this.presentAlert("Lo sentimos, no puede agregar 0 productos.");
      return;
    }
    if(this.currentNumber > this.cantidadEnStock)
    {
      // tslint:disable-next-line: quotemark
      this.presentAlert("Lo sentimos, la cantidad deseada es mayor a la cantidad disponible.");
      return;
    }
    if(this.currentNumber === 1)
    {
       // tslint:disable-next-line: quotemark
    this.showMessageOkCancel("Confirmación", "¿Está seguro en agregar: " +this.currentNumber + " producto?");
    }
    else
    {
       // tslint:disable-next-line: quotemark
    this.showMessageOkCancel("Confirmación", "¿Está seguro en agregar: " +this.currentNumber + " productos?");
    }
  }

  async showMessageOkCancel(title, message) {
    let choice
    const alert = await this.alertController.create({
        header: title,
        subHeader: message,
        buttons: [{
            text: 'Si',
            handler: () => {
                alert.dismiss(true)
                this.AddProductsToCart();
                return false
            }
        }, {
            text: 'No',
            handler: () => {
                alert.dismiss(false);
                return false;
            }
        }]
    });

    await alert.present();
    await alert.onDidDismiss().then((data) => {
        choice = data
    })
    return choice
  }

  async presentAlert(msj) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: msj
    });

    await alert.present();
  }


  async SuccessAlert(msj) {
    const alert = await this.alertController.create({
      header: 'Success',
      message: msj
    });

    await alert.present();
  }

  async AddProductsToCart() {
    const loading = await this.loadingController.create({
    });
    await loading.present();
    this.BusinessService.SaveProductsToCart(
      this.products[0].productoId,
      this.currentNumber,
      this.usuariopersona[0].usuarioPersonaId
    ).subscribe((user: IUsuarioPersona) => {
        loading.dismiss();
        this.SuccessAlert('Producto agregado al carrito exitosamente.');
        this.currentNumber = 0;
      }, (error) => {
        loading.dismiss();
        this.presentAlert('Error al agregar al carrito.');
      });
  }

}
