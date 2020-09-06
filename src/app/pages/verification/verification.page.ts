import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { IUsuarioPersona } from 'src/app/models/user.model';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {
  // tslint:disable-next-line: ban-types
  usuarioId: Number;
  verificationForm: FormGroup;

  constructor(
    public toastController: ToastController,
    private storage: Storage,
    private route: ActivatedRoute,
    public alertController: AlertController,
    private router: Router,
    public loadingController: LoadingController,
    public formBuilder: FormBuilder,
    public userService: UsersService,
  // tslint:disable-next-line: no-string-literal
  ) { this.usuarioId = this.route.snapshot.queryParams['UsuarioPersonaId'];
  this.verificationForm = this.formBuilder.group({
    code: new FormControl('', Validators.compose([
      Validators.required,
    ])),
  });
 }

  ngOnInit() {
  }

  async verifyUser() {
    const loading = await this.loadingController.create({
    });
    await loading.present();
    const verificationcode = this.verificationForm.get('code').value;
    this.userService.verifyUser(this.usuarioId, verificationcode).subscribe((user: IUsuarioPersona) => {
      loading.dismiss();
      // tslint:disable-next-line: comment-format
      this.storage.set('userAuth', user);
      this.router.navigate(['/tabs/home']);
    }, (error) => {
      loading.dismiss();
      this.presentAlert('Codigo Incorrecto.')
    });
  }

  async presentToast(msj) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 2000
    });
    toast.present();
  }

  async presentAlert(msj) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: msj
    });

    await alert.present();
  }

}
