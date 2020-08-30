import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';
import { IProductosVendidos } from '../models/adminbusiness.model';

@Injectable({
  providedIn: 'root'
})
export class AdminuserService {

  headers = new HttpHeaders({'Content-Type' : 'application/json'});

  constructor(private http: HttpClient, public router: Router, public storage: Storage) { }

  AdminLogin(user, password) {
    // return this.http.get(`${this.endpoint}userlogin.php?email=${email}&password=${password}`);
    return this.http.post(`${environment.API_URL}User/AdminLogin`, {User: user, Password: password}, {headers : this.headers});
  }


}


