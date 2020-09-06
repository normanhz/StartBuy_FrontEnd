import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { BusinessService } from '../../services/business.service';
import { IAllNotices } from 'src/app/models/business.model';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.page.html',
  styleUrls: ['./promotions.page.scss'],
})
export class PromotionsPage implements OnInit {

  constructor(private router: Router,
    private usersService: UsersService,
    private storage: Storage,
    // tslint:disable-next-line: no-shadowed-variable
    public BusinessService: BusinessService) { }
  public userName: string;
  public nombres: string;
  notices : IAllNotices[];
  ngOnInit() {
  }

  ionViewWillEnter() {
    this.storage.get('userAuth').then((data) => {
      this.userName = data.usuario;
      this.nombres = data.nombres;
    });

    this.BusinessService.GetAllNews().subscribe((notices) => {
      this.notices = notices;
    });
  }
}
