import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController, IonSlides } from '@ionic/angular';
import { BusinessService } from '../../services/business.service';
import { Storage } from '@ionic/storage';
import { IProducts } from '../../models/business.model';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.page.html',
  styleUrls: ['./detailproduct.page.scss'],
})
export class DetailproductPage implements OnInit {
  public currentNumber: number;
  public user: IUser;
  products: any = [];
  public productoId :  number;
  alert: any;
  constructor(private router: Router,
    private route: ActivatedRoute,
    public alertController: AlertController,
    // tslint:disable-next-line: no-shadowed-variable
    public BusinessService: BusinessService,
    public loadingController: LoadingController,
    public storage: Storage) {
      // tslint:disable-next-line: no-string-literal
      this.productoId = this.route.snapshot.queryParams['productoId'];
      this.currentNumber = 0;
     }

  ngOnInit() {
  }

  ionViewWillEnter() {
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
    });
  }

  AddtoCart(event)
  {

    if(this.currentNumber < 1)
    {
      // tslint:disable-next-line: quotemark
      this.presentAlert("Lo sentimos no puedo agregar 0 productos");
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
                // tslint:disable-next-line: quotemark
                console.log("aqui presionoo!");
                this.currentNumber = 0;
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


}
