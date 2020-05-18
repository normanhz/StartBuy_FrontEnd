import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { IUser } from 'src/app/models/user.model';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  constructor
  (
    private router: Router,
    private storage: Storage,
    private usersService: UsersService,
    public alertController: AlertController,
    public formBuilder: FormBuilder,
    public loadingController: LoadingController
  ){ this.registerForm = this.formBuilder.group({
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
      user_generoid: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      user_paisid: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      user_password: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      user_departamentoid: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      user_ciudadid: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      user_direccioncompleta: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      user_telefono: new FormControl('', Validators.compose([
        Validators.required,
      ]))
    });
  }

  ngOnInit() {
  }

  goLogin(){
    this.router.navigate(['/login']);
  }

  async presentAlert(msj) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: msj
    });

    await alert.present();
  }

  async register() {
    const loading = await this.loadingController.create({
    });
    await loading.present();
    this.usersService.userRegister(
      this.registerForm.get('user_usuario').value,
      this.registerForm.get('user_nombres').value,
      this.registerForm.get('user_apellidos').value,
      this.registerForm.get('user_email').value,
      this.registerForm.get('user_generoid').value,
      this.registerForm.get('user_paisid').value,
      this.registerForm.get('user_password').value,
      this.registerForm.get('user_departamentoid').value,
      this.registerForm.get('user_ciudadid').value,
      this.registerForm.get('user_direccioncompleta').value,
      this.registerForm.get('user_telefono').value).subscribe((user: IUser) => {
        loading.dismiss();
        this.router.navigate(['/verification'], {queryParams: {UsuarioPersonaId: user.usuarioPersonaId}});
      }, (error) => {
        loading.dismiss();
        this.presentAlert('El correo o teléfono que registro ya esta asociado a una cuenta activa.');
      });
  }
}
