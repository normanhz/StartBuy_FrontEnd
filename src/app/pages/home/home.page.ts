import { Component, OnInit } from '@angular/core';
import { IBusinessCategories } from '../../models/business.model';
import { BusinessService } from '../../services/business.service';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AdminuserService } from '../../adminservices/adminuser.service';
import { IUsuariosAsociados } from 'src/app/models/adminuser.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  IsAdmin: boolean;
  categories: IBusinessCategories[] = [];
  public userName: string;
  public nombres: string;
  productsInCart: any = [];
  public empresa: string;
  usuariosocio : IUsuariosAsociados[];
  constructor(
    private storage: Storage,
    private router: Router,
    // tslint:disable-next-line: no-shadowed-variable
    private AdminuserService: AdminuserService,
    // tslint:disable-next-line: no-shadowed-variable
    private BusinessService: BusinessService,
    public loadingController: LoadingController
  ) { }

  ionViewDidEnter(){
    this.getBusinessCategories();
    this.storage.get('userAuth').then((data) => {
      this.userName = data.usuario;
      this.nombres = data.nombres;
      this.IsAdmin = data.isAdmin;

      if(data.isAdmin === true)
      {
        this.AdminuserService.GetInfoUsuarioSocio(data.usuario, data.email).subscribe((usuariosocio)=>{
          this.usuariosocio = usuariosocio;
          this.empresa = this.usuariosocio[0].nombreEmpresa;
        })
      }
    });
  }


  ngOnInit() {
  }

  getBusinessCategories(){
    this.storage.get('userAuth').then(userInfo => {
       this.BusinessService.getBusinessCategories().subscribe((data) => {
          // tslint:disable-next-line: no-angle-bracket-type-assertion
          this.categories = data;
       });
    });
  }

  goNoticias(){
    this.router.navigate(['/registernotices']);
  }

  goviewProducts()
  {
    this.router.navigate(['/viewproducts']);
  }
}
