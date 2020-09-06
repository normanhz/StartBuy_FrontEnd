import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminbusinessService } from 'src/app/adminservices/adminbusiness.service';
import { INotices } from '../../models/adminbusiness.model';
import { LoadingController, AlertController } from '@ionic/angular';
import { AdminuserService } from 'src/app/adminservices/adminuser.service';
import { IUsuariosAsociados } from 'src/app/models/adminuser.model';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-modalnotices',
  templateUrl: './modalnotices.page.html',
  styleUrls: ['./modalnotices.page.scss'],
})
export class ModalnoticesPage implements OnInit {
  IsModify: boolean;
  noticiaId: number;
  FormNotices: FormGroup;
  notices: INotices[];
  empresaId: number;
  usuariosocio= new Array<IUsuariosAsociados>();
  constructor( public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private cdRef:ChangeDetectorRef,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private adminUserService: AdminuserService,
    public adminBusinessService: AdminbusinessService,
    private storage: Storage) {
    this.FormNotices = this.formBuilder.group({
      notice_descripcion: new FormControl('', Validators.compose([
      Validators.required,
      ]))
    });

    // tslint:disable-next-line: no-string-literal
    this.noticiaId = this.route.snapshot.queryParams['noticiaId'];

  }


  ngOnInit() {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewChecked()
{
  this.cdRef.detectChanges();
}

  ionViewDidEnter() {

    if(this.noticiaId > 0)
    {
      this.IsModify = true;

      this.adminBusinessService.GetNewsBusinessById(this.noticiaId).subscribe((data) => {
        this.notices = data;
      });

    }
    else
    {
      this.IsModify = false;
    }

    this.storage.get('userAuth').then((data) => {

      this.adminUserService.GetInfoUsuarioSocio(data.usuario, data.email).subscribe((usuariosocio)=>{
        this.usuariosocio = usuariosocio;
        this.empresaId = this.usuariosocio[0].empresaId;
      })
    });

  }




  async editinfo(){
    const loading = await this.loadingController.create({
    });
    await loading.present();
    // tslint:disable-next-line: max-line-length
    this.adminBusinessService.EditNoticeInfo(this.noticiaId, this.FormNotices.get('notice_descripcion').value, this.empresaId).subscribe(() => {
        loading.dismiss();
        this.presentAlert('La información de la noticia ha sido actualizado correctamente.');
        this.router.navigate(['/registernotices']);
      }, (error) => {
        loading.dismiss();
      });
  }

  async addinfo() {
    const loading = await this.loadingController.create({
    });
    await loading.present();
    this.adminBusinessService.SaveNotices(this.FormNotices.get('notice_descripcion').value, this.empresaId).subscribe(() => {
        loading.dismiss();
        this.presentAlert('Se ha agregado la noticia exitosamente.');
        this.FormNotices.reset();
      }, (error) => {
        loading.dismiss();
        this.presentAlert('Error al guardar la noticia.');
      });
  }

  async presentAlert(msj) {
    const alert = await this.alertController.create({
      header: 'Success',
      message: msj
    });

    await alert.present();
  }




}
