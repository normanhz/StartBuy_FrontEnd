import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Storage } from '@ionic/storage';
import { IGender, IUsuarioPersona } from '../../models/user.model';

@Component({
  selector: 'app-edituserinfo',
  templateUrl: './edituserinfo.page.html',
  styleUrls: ['./edituserinfo.page.scss'],
})
export class EdituserinfoPage implements OnInit {
  users: IUsuarioPersona[] = [];
  public userid :  number;
  usereditinfoForm: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private storage: Storage,
    private usersService: UsersService,
    public alertController: AlertController,
    public formBuilder: FormBuilder,
    public loadingController: LoadingController
  ) {
    this.usereditinfoForm = this.formBuilder.group({
      user_usuario: new FormControl('', Validators.compose([
        Validators.required,
        ])), user_nombres: new FormControl('', Validators.compose([
          Validators.required,
        ])),
        user_apellidos: new FormControl('', Validators.compose([
          Validators.required,
        ])),
        user_email: new FormControl('', Validators.compose([
          Validators.required,
        ])),
        user_direccioncompleta: new FormControl('', Validators.compose([
          Validators.required,
        ])),
        user_telefono: new FormControl('', Validators.compose([
          Validators.required,
        ]))
      });

      // tslint:disable-next-line: no-string-literal
      this.userid = this.route.snapshot.queryParams['userid'];
   }

   ionViewDidEnter()
  {
    this.storage.get('userAuth').then((data) => {
      this.usersService.GetInfoUsuarioPersona(data.usuario, data.email).subscribe((usuariopersona)=>{
        this.users = usuariopersona;
      })

    });

  }

  async presentAlert(msj) {
    const alert = await this.alertController.create({
      header: 'Success',
      message: msj
    });

    await alert.present();
  }

  async editinfo() {
    const loading = await this.loadingController.create({
    });
    await loading.present();
    this.usersService.EditUserInfo(
      this.userid,
      this.usereditinfoForm.get('user_usuario').value,
      this.usereditinfoForm.get('user_nombres').value,
      this.usereditinfoForm.get('user_apellidos').value,
      this.usereditinfoForm.get('user_email').value,
      this.usereditinfoForm.get('user_direccioncompleta').value,
      this.usereditinfoForm.get('user_telefono').value).subscribe((user:IUsuarioPersona[]) => {
        loading.dismiss();
        this.presentAlert('La información del usuario ha sido actualizado correctamente.');
        this.logout();
      }, (error) => {
        loading.dismiss();
      });
  }

  ngOnInit() {
  }

  logout(){
    this.usersService.logout();
    this.router.navigate(['/login']);
  }

  validarEmail(event) {
    const validacionEmail = event.target.value;

    if(validacionEmail === '')
    return;
    // tslint:disable-next-line: max-line-length
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(validacionEmail)){
     return;
    } else {
      // tslint:disable-next-line: quotemark
      this.presentAlert("¡La dirección de email es incorrecta!");
      // tslint:disable-next-line: quotemark
      event.target.value= "";
    }
  }

}
