import { Component, OnInit } from '@angular/core';
import { IBusiness } from 'src/app/models/business.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { BusinessService } from '../../services/business.service';
import { Storage } from '@ionic/storage';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-businessbycategory',
  templateUrl: './businessbycategory.page.html',
  styleUrls: ['./businessbycategory.page.scss'],
})
export class BusinessbycategoryPage implements OnInit {
  public categoriaEmpresaId :  number;
  business: IBusiness[] = [];
  public filtername : string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public alertController: AlertController,
    // tslint:disable-next-line: no-shadowed-variable
    public BusinessService: BusinessService,
    public loadingController: LoadingController,
    public storage: Storage,
  ) {
      // tslint:disable-next-line: no-string-literal
      this.categoriaEmpresaId = this.route.snapshot.queryParams['categoriaEmpresaId'];
   }

  ngOnInit() {
  }

  ionViewWillEnter()
  {
    this.getBusinessByCategory();
  }

  getBusinessByCategory()
  {
    // this.BusinessService.getBusinessByCategories(this.categoriaEmpresaId).subscribe((business) =>
    // {
    //   this.business = business;
    // });
    this.BusinessService.getBusinessByCategories(this.categoriaEmpresaId).subscribe(business =>{
      if(this.filtername)
      {
        this.business = business.filter(item => {
          // tslint:disable-next-line: quotemark
          return item.empresa.toUpperCase().indexOf(this.filtername.toUpperCase()) > -1;
        });
      }
      else
      {
        return this.business = business
      }
    });
  }

  async filterCards(event)
  {
    this.filtername = event.target.value;
    this.getBusinessByCategory();
  }

}
