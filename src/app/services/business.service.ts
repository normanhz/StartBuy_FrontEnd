import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IBusinessCategories, IBusiness, IProducts } from '../models/business.model';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  headers = new HttpHeaders({'Content-Type' : 'application/json'});
  constructor(private http: HttpClient, public router: Router, public storage: Storage) { }

  getBusinessCategories() {
    // tslint:disable-next-line: max-line-length
    return this.http.get<IBusinessCategories[]>(`${environment.API_URL}Business/GetBusinessCategories`, {headers:this.headers});
  }

  getBusinessByCategories(categoriaEmpresaId) {
    // tslint:disable-next-line: max-line-length
    return this.http.get<IBusiness[]>(`${environment.API_URL}Business/GetBusinessByCategories/${categoriaEmpresaId}`, {headers:this.headers});
  }

  getProductByBusiness(empresaId) {
    // tslint:disable-next-line: max-line-length
    return this.http.get<IProducts[]>(`${environment.API_URL}Business/GetProductsByBusiness/${empresaId}`, {headers:this.headers});
  }
}
