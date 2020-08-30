import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IAdminUser } from 'src/app/models/adminuser.model';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.page.html',
  styleUrls: ['./adminhome.page.scss'],
})
export class AdminhomePage implements OnInit {
  public user: IAdminUser;
  public userName: string;
  public nombres: string;
  public empresa: string;
  constructor(private storage: Storage,) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.storage.get('userAuth').then((data) => {
      this.user = data
      this.userName = this.user.usuario;
      this.nombres = this.user.nombres;
      this.empresa = this.user.nombreEmpresa;
    });
  }
}
