import { Component, OnInit, enableProdMode } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { IUser } from 'src/app/models/user.model';
import { Storage } from '@ionic/storage';
import { AdminuserService } from '../../adminservices/adminuser.service';
import { IAdminUser } from 'src/app/models/adminuser.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{
  loginForm:FormGroup;
  constructor(
    private router: Router,
    private usersService: UsersService,
    private adminservices: AdminuserService,
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

    this.usersService.SetIsAdmin(this.loginForm.get('isadmin').value);

    if(this.usersService.GetIsAdmin() === true)
    {
      const loading = await this.loadingController.create({
      });
      await loading.present();
      this.adminservices.AdminLogin(
        this.loginForm.get('user_email').value,
        this.loginForm.get('user_password').value).subscribe((adminuser: IAdminUser) => {
          loading.dismiss();
          // tslint:disable-next-line: comment-format
          this.storage.set('userAuth', adminuser);
          this.router.navigate(['/tabs/adminhome']);
        }, (error) => {
          loading.dismiss();
          this.presentAlert('Datos incorrectos.')
        });

    }
    else
    {
      const loading = await this.loadingController.create({
      });
      await loading.present();
      this.usersService.UserLogin(
        this.loginForm.get('user_email').value,
        this.loginForm.get('user_password').value).subscribe((user: IUser) => {
          loading.dismiss();
          if (user.cuentaVerificada === false) {
            this.alertUserVerify(user.usuarioPersonaId);
          } else {
          this.storage.set('userAuth', user);
          this.router.navigate(['/tabs/home']);
          }
        }, (error) => {
          loading.dismiss();
          this.presentAlert('Datos incorrectos.')
        });
    }
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
