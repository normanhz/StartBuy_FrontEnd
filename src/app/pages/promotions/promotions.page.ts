import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user.model';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.page.html',
  styleUrls: ['./promotions.page.scss'],
})
export class PromotionsPage implements OnInit {

  constructor(private router: Router,
    private usersService: UsersService,
    private storage: Storage) { }
  public user: IUser;
  public userName: string;
  public nombres: string;
  ngOnInit() {
  }

  ionViewWillEnter() {
    this.storage.get('userAuth').then((data) => {
      this.user = data
      this.userName = this.user.usuario;
      this.nombres = this.user.nombres;
    });
  }
}
