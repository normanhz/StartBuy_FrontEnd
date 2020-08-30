import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { IUser } from 'src/app/models/user.model';
import { Storage } from '@ionic/storage';
import { IGender } from '../../models/user.model';


@Component({
  selector: 'app-enviarsolicitud',
  templateUrl: './enviarsolicitud.page.html',
  styleUrls: ['./enviarsolicitud.page.scss'],
})
export class EnviarsolicitudPage implements OnInit {
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
      user_empresa: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      user_generoid: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      user_password: new FormControl('', Validators.compose([
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

  async succesAlert(msj) {
    const alert = await this.alertController.create({
      header: 'Success',
      message: msj
    });

    await alert.present();
  }

  async register() {
    this.registerForm.reset();
    this.succesAlert('La socilitud ha sido enviada con éxito, un asesor se pondrá en contacto contigo.');
    // const loading = await this.loadingController.create({
    // });
    // await loading.present();
    // this.usersService.userRegister(
    //   this.registerForm.get('user_usuario').value,
    //   this.registerForm.get('user_nombres').value,
    //   this.registerForm.get('user_apellidos').value,
    //   this.registerForm.get('user_email').value,
    //   this.registerForm.get('user_generoid').value,
    //   this.registerForm.get('user_empresa').value,
    //   this.registerForm.get('user_password').value,
    //   this.registerForm.get('user_direccioncompleta').value,
    //   this.registerForm.get('user_telefono').value).subscribe((user: IUser) => {
    //     loading.dismiss();
    //     this.succesAlert('La socilitud ha sido enviada con éxito.');
    //   }, (error) => {
    //     loading.dismiss();
    //     this.presentAlert('El correo o usuario ya esta asociado a una cuenta activa.');
    //   });
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
