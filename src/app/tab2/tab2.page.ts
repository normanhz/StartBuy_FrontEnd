import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/user.model';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public user: IUser;
  public userName: string;
  constructor(
    private router: Router,
    private storage: Storage
  ) {}

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.storage.get('userAuth').then((data) => {
      this.user = data
      this.userName = this.user.usuario;
    });
  }
}


