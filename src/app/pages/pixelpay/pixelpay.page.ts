import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../services/business.service';
import { Storage } from '@ionic/storage';
import { IUsuarioPersona } from 'src/app/models/user.model';
import { AlertController, LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-pixelpay',
  templateUrl: './pixelpay.page.html',
  styleUrls: ['./pixelpay.page.scss'],
})
export class PixelpayPage implements OnInit {
  public user: IUsuarioPersona[] = [];
  public correo: string;
  public nombres: string;
  public TotalPagar : any;
  public SubTotal : any;
  public Impuesto : any;
  constructor(
    private storage: Storage,
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    public alertController: AlertController,
    // tslint:disable-next-line: no-shadowed-variable
    private BusinessService: BusinessService,
  ) {
    // tslint:disable-next-line: no-string-literal
    this.TotalPagar = Math.round(this.route.snapshot.queryParams['infoproduct']).toFixed(2);
    this.SubTotal = Math.round(this.TotalPagar - (this.TotalPagar*0.15)).toFixed(2);
    this.Impuesto = Math.round(this.TotalPagar*0.15).toFixed(2);
}


  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getUserInfo();
  }

  getUserInfo(){
    this.storage.get('userAuth').then((data) => {
      this.correo = data.email;
      this.nombres = data.nombres;

      this.usersService.GetInfoUsuarioPersona(data.usuario, data.email).subscribe((usuariopersona)=>{
        this.user = usuariopersona;
      })
    });
  }


  Pagar(){
    this.getUserInfo();
    this.BusinessService.CalcularGanancias(this.user[0].usuarioPersonaId).subscribe((data) => {
      // tslint:disable-next-line: quotemark
      this.SuccessAlert("El pago ha sido exitosamente.");
      this.router.navigate(['/tabs/home']);
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
