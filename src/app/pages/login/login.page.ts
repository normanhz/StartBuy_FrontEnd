import { Component, OnInit, enableProdMode } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { IUsuarioPersona, IUsuario } from 'src/app/models/user.model';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{
  loginForm:FormGroup;
  UsuarioPersona = new Array<IUsuarioPersona>();
  constructor(
    private router: Router,
    private usersService: UsersService,
    private storage: Storage,
    public toastController: ToastController,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      user_email: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      user_password: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      isadmin: new FormControl('false', Validators.compose([
        Validators.required,
      ]))
    });
  }



  goRegister() {
    this.router.navigate(['/register']);
  }

  goAsociar() {
    this.router.navigate(['/enviarsolicitud']);
  }



  async login() {

      const loading = await this.loadingController.create({
      });
      await loading.present();
      this.usersService.UserLoginv2(
        this.loginForm.get('user_email').value,
        this.loginForm.get('user_password').value).subscribe((user: IUsuario) => {
          loading.dismiss();

          if(user.isAdmin === false)
          {
            this.usersService.GetInfoUsuarioPersona(user.usuario, user.email).subscribe((usuariopersona) => {
              loading.dismiss();
              this.UsuarioPersona = usuariopersona;
              if (this.UsuarioPersona[0].cuentaVerificada === false) {
                this.alertUserVerify(usuariopersona[0].usuarioPersonaId);
              } else {
              this.storage.set('userAuth', user);
              this.router.navigate(['/tabs/home']);
            }

            });
          }
          else
          {
            this.storage.set('userAuth', user);
            this.router.navigate(['/tabs/home']);
          }
        }, (error) => {
          loading.dismiss();
          this.presentAlert('Datos incorrectos.')
        });

  }

  async presentAlert(msj) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: msj,
    });

    await alert.present();
  }

  async SuccesAlert(msj) {
    const alert = await this.alertController.create({
      header: 'Succes',
      message: msj
    });

    await alert.present();
  }

  async alertUserVerify(usuarioPersonaId) {
    const alert = await this.alertController.create({
      header: '¡No ha verificado su cuenta!',
      message: `¿Desea verificar el correo?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: blah => { }
        },
        {
          cssClass: 'color-dark',
          text: 'Verificar',
          handler: async () => {
            // tslint:disable-next-line: object-literal-shorthand
            this.router.navigate(['/verification'], {queryParams: {UsuarioPersonaId: usuarioPersonaId}});
          }
        }
      ]
    });
    await alert.present();
  }



}
