import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AdminuserService } from '../../adminservices/adminuser.service';
import { IUsuariosAsociados } from 'src/app/models/adminuser.model';
import { Router } from '@angular/router';
import { INotices } from '../../models/adminbusiness.model';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.page.html',
  styleUrls: ['./adminhome.page.scss'],
})
export class AdminhomePage implements OnInit {
  public userName: string;
  public nombres: string;
  public empresa: string;
  usuariosocio= new Array<IUsuariosAsociados>();
  constructor(private storage: Storage,
    // tslint:disable-next-line: no-shadowed-variable
    private AdminuserService: AdminuserService,
    private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.storage.get('userAuth').then((data) => {
      this.userName = data.usuario;
      this.nombres = data.nombres;

      this.AdminuserService.GetInfoUsuarioSocio(data.usuario, data.email).subscribe((usuariosocio)=>{
        this.usuariosocio = usuariosocio;
        this.empresa = this.usuariosocio[0].nombreEmpresa;
      })
    });
  }

  goNoticias(){
    this.router.navigate(['/registernotices']);
  }
}
