import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminuserService } from 'src/app/adminservices/adminuser.service';
import { AdminbusinessService } from 'src/app/adminservices/adminbusiness.service';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { IUsuariosAsociados } from 'src/app/models/adminuser.model';
import { INotices } from 'src/app/models/adminbusiness.model';

@Component({
  selector: 'app-registernotices',
  templateUrl: './registernotices.page.html',
  styleUrls: ['./registernotices.page.scss'],
})
export class RegisternoticesPage implements OnInit {
  empresaId: number;
  usuariosocio= new Array<IUsuariosAsociados>();
  notices: INotices[];
  constructor(private router: Router,
    private adminUserService: AdminuserService,
    // tslint:disable-next-line: no-shadowed-variable
    public adminBusinessService: AdminbusinessService,
    public alertController: AlertController,
    private storage: Storage) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.storage.get('userAuth').then((data) => {

      this.adminUserService.GetInfoUsuarioSocio(data.usuario, data.email).subscribe((usuariosocio)=>{
        this.usuariosocio = usuariosocio;
        this.empresaId = this.usuariosocio[0].empresaId;

        this.getNewsByBusiness();
      })
    });
  }

  getNewsByBusiness() {

    this.adminBusinessService.getNewsByBusiness(this.empresaId).subscribe((notices) => {
      this.notices = notices;
    });
  }

  addItem(){
    this.router.navigate(['/modalnotices']);
  }

  removeItem(event){
    this.adminBusinessService.DeleteNotices(event).subscribe((data) => {
      this.ionViewWillEnter();
    });
  }

  goEditInfo(event){
    this.router.navigate(['/modalnotices'], {queryParams: {noticiaId: event}});
  }

}
