import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';

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

  // tslint:disable-next-line: max-line-length
  userRegister(usuario, nombres, apellidos, email, generoid, paisid, password, departamentoid, ciudadid, direccioncompleta, telefono) {
    // return this.http.get(`${this.endpoint}userlogin.php?email=${email}&password=${password}`);
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${environment.API_URL}User/UserRegistration`, {Usuario: usuario, Nombres: nombres, Apellidos: apellidos, Email: email, GeneroID: generoid, PaisID: paisid, Password: password, DepartamentoID: departamentoid, CiudadID: ciudadid, DireccionCompleta: direccioncompleta, Telefono: telefono}, {headers : this.headers});
  }

  verifyUser(usuarioPersonaId, code) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${environment.API_URL}User/UserVerification`, {UsuarioPersonaId: JSON.parse(usuarioPersonaId), CodigoVerificacion: code}, {headers : this.headers});
  }

}
