import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Storage } from '@ionic/storage';
import { IGender } from '../../models/user.model';
import { IUsuariosAsociados } from 'src/app/models/adminuser.model';
import { AdminuserService } from '../../adminservices/adminuser.service';

@Component({
  selector: 'app-editadmininfo',
  templateUrl: './editadmininfo.page.html',
  styleUrls: ['./editadmininfo.page.scss'],
})
export class EditadmininfoPage implements OnInit {
  users: IUsuariosAsociados[] = [];
  public userid :  number;
  admineditinfoForm: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private storage: Storage,
    private usersService: UsersService,
    private adminuserService: AdminuserService,
    public alertController: AlertController,
    public formBuilder: FormBuilder,
    public loadingController: LoadingController
  ) {
    this.admineditinfoForm = this.formBuilder.group({
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
       this.adminuserService.GetInfoUsuarioSocio(data.usuario, data.email).subscribe((usuariosocio)=>{
         this.users = usuariosocio;
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
     this.adminuserService.EditAdminInfo(
       this.userid,
       this.admineditinfoForm.get('user_usuario').value,
       this.admineditinfoForm.get('user_nombres').value,
       this.admineditinfoForm.get('user_apellidos').value,
       this.admineditinfoForm.get('user_email').value,
       this.admineditinfoForm.get('user_direccioncompleta').value,
       this.admineditinfoForm.get('user_telefono').value).subscribe((user:IUsuariosAsociados[]) => {
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
