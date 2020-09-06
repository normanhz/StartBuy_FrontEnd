import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { IUsuarioPersona } from 'src/app/models/user.model';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private router: Router,
    private usersService: UsersService,
    private storage: Storage) { }
  public user: IUsuarioPersona[]=[];
  public userName: string;
  public nombres: string;
  userid: number;
  ngOnInit() {
  }

  ionViewWillEnter() {
    this.storage.get('userAuth').then((data) => {
      this.userName = data.usuario;
      this.nombres = data.nombres;

      this.usersService.GetInfoUsuarioPersona(data.usuario, data.email).subscribe((usuariopersona)=>{
        this.user = usuariopersona;
        this.userid = this.user[0].usuarioPersonaId;
      })
    });
  }

  GoEditInfo(){
    this.router.navigate(['/edituserinfo'], {queryParams: {userid: this.userid}});
  }


  logout(){
    this.usersService.logout();
    this.router.navigate(['/login']);
  }
}
