import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IBusinessCategories, IBusiness, IProducts, IProductsInCart } from '../models/business.model';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';
import { IProductosVendidos } from '../models/adminbusiness.model';

@Injectable({
  providedIn: 'root'
})
export class AdminbusinessService {
  headers = new HttpHeaders({'Content-Type' : 'application/json'});
  constructor(private http: HttpClient, public router: Router, public storage: Storage) { }

  getProductosVendidos(Id) {
    // tslint:disable-next-line: max-line-length
    return this.http.get<IProductosVendidos[]>(`${environment.API_URL}Business/GetProductosVendidos/${JSON.parse(Id)}`, {headers:this.headers});
  }

  getProductosPendientes(Id) {
    // tslint:disable-next-line: max-line-length
    return this.http.get<IProductosVendidos[]>(`${environment.API_URL}Business/GetProductosPendientes/${JSON.parse(Id)}`, {headers:this.headers});
  }
}
