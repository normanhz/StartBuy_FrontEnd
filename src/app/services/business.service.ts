import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IBusinessCategories, IBusiness, IProducts, IProductsInCart } from '../models/business.model';
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

  getProductById(productId) {
    // tslint:disable-next-line: max-line-length
    return this.http.get<IProducts[]>(`${environment.API_URL}Business/GetProductById/${productId}`, {headers:this.headers});
  }

  SaveProductsToCart(ProductoId, Cantidad, UsuarioComprador) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${environment.API_URL}Business/SaveProductsToCart`, {ProductoId: JSON.parse(ProductoId), Cantidad: JSON.parse(Cantidad), UsuarioComprador: JSON.parse(UsuarioComprador)}, {headers : this.headers});
  }

  getProductsInCart(Id) {
    // tslint:disable-next-line: max-line-length
    return this.http.get<IProductsInCart[]>(`${environment.API_URL}Business/GetProductsInCart/${JSON.parse(Id)}`, {headers:this.headers});
  }

  getTotalCompraByUserId(Id) {
    // tslint:disable-next-line: max-line-length
    return this.http.get<any>(`${environment.API_URL}Business/GetTotalCompraByUserId/${JSON.parse(Id)}`, {headers:this.headers});
  }

  deleteProductInCart(Id) {
    // tslint:disable-next-line: max-line-length
    return this.http.delete<any>(`${environment.API_URL}Business/DeleteProductInCart/${JSON.parse(Id)}`, {headers:this.headers});
  }

  CalcularGanancias(UsuarioComprador) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${environment.API_URL}Business/CalcularGanancias`, {UsuarioComprador: JSON.parse(UsuarioComprador)}, {headers : this.headers});
  }

  GetAllNews() {
    // tslint:disable-next-line: max-line-length
    return this.http.get<any>(`${environment.API_URL}Business/GetAllNews/`, {headers:this.headers});
  }
}
