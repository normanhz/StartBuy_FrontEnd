import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';
import { IGender, IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  headers = new HttpHeaders({'Content-Type' : 'application/json'});

  constructor(private http: HttpClient, public router: Router, public storage: Storage) { }


  UserLogin(user, password) {
    // return this.http.get(`${this.endpoint}userlogin.php?email=${email}&password=${password}`);
    return this.http.post(`${environment.API_URL}User/UserLogin`, {User: user, Password: password}, {headers : this.headers});
  }

   userRegister(usuario, nombres, apellidos, email, generoid, password, direccioncompleta, telefono) {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${environment.API_URL}User/UserRegistration`, {Usuario: usuario, Nombres: nombres, Apellidos: apellidos, Email: email, GeneroID: generoid, Password: password, DireccionCompleta: direccioncompleta, Telefono: telefono}, {headers : this.headers});
    }

  verifyUser(usuarioPersonaId, code) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${environment.API_URL}User/UserVerification`, {UsuarioPersonaId: JSON.parse(usuarioPersonaId), CodigoVerificacion: code}, {headers : this.headers});
  }

  GetUsersById(id) {
    // tslint:disable-next-line: max-line-length
    return this.http.get<IUser[]>(`${environment.API_URL}User/GetUsersById/${id}`, {headers:this.headers});
  }

  EditUserInfo(usuarioPersonaId, usuario, nombres, apellidos, email, direccioncompleta, telefono) {

    // tslint:disable-next-line: object-literal-shorthand
    // tslint:disable-next-line: max-line-length
    return this.http.put<IUser[]>(`${environment.API_URL}User/EditUserInfo/${JSON.parse(usuarioPersonaId)}`, {Usuario: usuario, Nombres: nombres, Apellidos: apellidos, Email: email, DireccionCompleta: direccioncompleta, Telefono: telefono}, {headers : this.headers});
    }

  getGenders() {
    // tslint:disable-next-line: max-line-length
    return this.http.get<IGender[]>(`${environment.API_URL}User/GetGenders`, {headers:this.headers});
  }

  logout() {
    this.storage.remove('userAuth');
  }

}
