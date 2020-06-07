import { Component, OnInit } from '@angular/core';
import { IBusinessCategories } from '../../models/business.model';
import { Router } from '@angular/router';
import { BusinessService } from '../../services/business.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { IUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  categories: IBusinessCategories[] = [];
  public user: IUser;
  public userName: string;
  public nombres: string;
  constructor(
    private storage: Storage,
    // tslint:disable-next-line: no-shadowed-variable
    private BusinessService: BusinessService,
  ) { }

  ionViewDidEnter(){
    this.getBusinessCategories();
  }

  ionViewWillEnter() {
    this.storage.get('userAuth').then((data) => {
      this.user = data
      this.userName = this.user.usuario;
      this.nombres = this.user.nombres;
    });
  }

  ngOnInit() {
  }

  getBusinessCategories(){
    this.storage.get('userAuth').then(userInfo => {
       this.BusinessService.getBusinessCategories().subscribe((data) => {
          // tslint:disable-next-line: no-angle-bracket-type-assertion
          this.categories = data;
          console.log(this.categories)
       });
    });
  }

}
