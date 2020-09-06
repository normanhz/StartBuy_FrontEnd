import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { IUsuariosAsociados } from 'src/app/models/adminuser.model';
import { Storage } from '@ionic/storage';
import { AdminuserService } from '../../adminservices/adminuser.service';

@Component({
  selector: 'app-adminsettings',
  templateUrl: './adminsettings.page.html',
  styleUrls: ['./adminsettings.page.scss'],
})
export class AdminsettingsPage implements OnInit {

  constructor(private router: Router,
    private usersService: UsersService,
    private adminuserService: AdminuserService,
    private storage: Storage) { }
  public user: IUsuariosAsociados[] = [];
  public userName: string;
  public nombres: string;
  userid: number;

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.storage.get('userAuth').then((data) => {
      this.userName = data.usuario;
      this.nombres = data.nombres;

      this.adminuserService.GetInfoUsuarioSocio(data.usuario, data.email).subscribe((usuariosocio)=>{
        this.user = usuariosocio;
        this.userid = this.user[0].usuarioAsociadoId;
      })
    });
  }

  GoEditInfo(){
    this.router.navigate(['/editadmininfo'], {queryParams: {userid: this.userid}});
  }


  logout(){
    this.usersService.logout();
    this.router.navigate(['/login']);
  }

}
