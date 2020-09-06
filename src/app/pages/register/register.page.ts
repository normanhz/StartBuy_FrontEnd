import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { IUsuarioPersona } from 'src/app/models/user.model';
import { Storage } from '@ionic/storage';
import { IGender } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  generos: IGender[] = [];
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
      // user_paisid: new FormControl('', Validators.compose([
      //   Validators.required,
      // ])),
      user_password: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      // user_departamentoid: new FormControl('', Validators.compose([
      //   Validators.required,
      // ])),
      // user_ciudadid: new FormControl('', Validators.compose([
      //   Validators.required,
      // ])),
      user_direccioncompleta: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      user_telefono: new FormControl('', Validators.compose([
        Validators.required,
      ]))
    });
  }

  ionViewDidEnter(){
    this.getGenders();
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
      // this.registerForm.get('user_paisid').value,
      this.registerForm.get('user_password').value,
      // this.registerForm.get('user_departamentoid').value,
      // this.registerForm.get('user_ciudadid').value,
      this.registerForm.get('user_direccioncompleta').value,
      this.registerForm.get('user_telefono').value).subscribe((user: IUsuarioPersona) => {
        loading.dismiss();
        this.router.navigate(['/verification'], {queryParams: {UsuarioPersonaId: user.usuarioPersonaId}});
      }, (error) => {
        loading.dismiss();
        this.presentAlert('El correo o usuario ya esta asociado a una cuenta activa.');
      });
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

  getGenders(){
    this.storage.get('userAuth').then(userInfo => {
       this.usersService.getGenders().subscribe((data) => {
          // tslint:disable-next-line: no-angle-bracket-type-assertion
          this.generos = data;
       });
    });
  }
}
