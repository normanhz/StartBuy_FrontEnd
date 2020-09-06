import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController, IonSlides } from '@ionic/angular';
import { BusinessService } from '../../services/business.service';
import { Storage } from '@ionic/storage';
import { IProducts } from '../../models/business.model';

@Component({
  selector: 'app-productbybusiness',
  templateUrl: './productbybusiness.page.html',
  styleUrls: ['./productbybusiness.page.scss'],
})
export class ProductbybusinessPage implements OnInit {
  products: any = [];
  public productoId :  number;
  public empresaId : number;

  sliderConfig = {
    slidesPerView: 1.5,
    spaceBetween: 2,
    centeredSlides: true,
    initialSlide: 1,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet(index, className) {
        // tslint:disable-next-line: max-line-length
        return '<span class="' + className + '" style="border-radius:1px;height:4px;width: 20px;background: #fb0021;margin-left:0px;margin-right:0px"></span>';
      },
    }
  }

  constructor(private router: Router,
    private route: ActivatedRoute,
    public alertController: AlertController,
    // tslint:disable-next-line: no-shadowed-variable
    public BusinessService: BusinessService,
    public loadingController: LoadingController,
    public storage: Storage) {
      // tslint:disable-next-line: no-string-literal
      this.empresaId = this.route.snapshot.queryParams['empresaId'];
     }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getProductByBusiness();
  }

  getProductByBusiness() {
    this.BusinessService.getProductByBusiness(this.empresaId).subscribe((products) => {
      this.products = products;
    });
  }

  slideDidLoader(slides: IonSlides) {
    slides.startAutoplay();
  }

  slidesDidLoad(slides: IonSlides, title) {
    slides.startAutoplay();
    return title;
  }

}
