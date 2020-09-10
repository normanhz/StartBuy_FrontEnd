import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IBusinessCategories, IBusiness, IProducts, IProductsInCart } from '../models/business.model';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';
import { IProductosVendidos, INotices, IProductosChange } from '../models/adminbusiness.model';

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

  getNewsByBusiness(Id) {
    // tslint:disable-next-line: max-line-length
    return this.http.get<INotices[]>(`${environment.API_URL}Business/GetNewsByBusiness/${JSON.parse(Id)}`, {headers:this.headers});
  }

  GetNewsBusinessById(Id) {
    // tslint:disable-next-line: max-line-length
    return this.http.get<INotices[]>(`${environment.API_URL}Business/GetNewsBusinessById/${JSON.parse(Id)}`, {headers:this.headers});
  }

  EditNoticeInfo(noticiaId, descripcion, empresaId) {

    // tslint:disable-next-line: object-literal-shorthand
    // tslint:disable-next-line: max-line-length
    return this.http.put<INotices[]>(`${environment.API_URL}Business/EditNoticeInfo/${JSON.parse(noticiaId)}`, {Descripcion: descripcion, EmpresaId: empresaId}, {headers : this.headers});
    }

    SaveNotices(descripcion, empresaId) {
      // tslint:disable-next-line: max-line-length
      // tslint:disable-next-line: max-line-length
      return this.http.post(`${environment.API_URL}Business/SaveNotices`, {Descripcion: descripcion, EmpresaId: empresaId}, {headers : this.headers});
      }

      DeleteNotices(Id) {
        // tslint:disable-next-line: max-line-length
        return this.http.delete<any>(`${environment.API_URL}Business/DeleteNotices/${JSON.parse(Id)}`, {headers:this.headers});
      }

      getProductosByEmpresaId(Id) {
        // tslint:disable-next-line: max-line-length
        return this.http.get<IProductosChange[]>(`${environment.API_URL}Business/GetProductosByEmpresaId/${JSON.parse(Id)}`, {headers:this.headers});
      }

      getTotalVendidoByEmpresa(Id) {
        // tslint:disable-next-line: max-line-length
        return this.http.get<any>(`${environment.API_URL}Business/GetTotalVendidoByEmpresa/${JSON.parse(Id)}`, {headers:this.headers});
      }

      EditEstadoProducto(productoId, estado) {

        // tslint:disable-next-line: object-literal-shorthand
        // tslint:disable-next-line: max-line-length
        return this.http.put<any[]>(`${environment.API_URL}Business/EditEstadoProducto/${JSON.parse(productoId)}`, {Estado: estado}, {headers : this.headers});
        }
}
