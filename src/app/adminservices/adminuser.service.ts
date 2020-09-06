import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';
import { IUsuariosAsociados } from '../models/adminuser.model';

@Injectable({
  providedIn: 'root'
})
export class AdminuserService {

  headers = new HttpHeaders({'Content-Type' : 'application/json'});

  constructor(private http: HttpClient, public router: Router, public storage: Storage) { }

  GetInfoUsuarioSocio(username, email) {
    // tslint:disable-next-line: max-line-length
    return this.http.get<IUsuariosAsociados[]>(`${environment.API_URL}User/GetInfoUsuarioSocio/${username}/${email}`, {headers:this.headers});
  }

  solicitudRegistration(usuario, nombres, apellidos, email, generoid, password, direccioncompleta, telefono, nombreempresa) {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${environment.API_URL}User/SolicitudRegistration`, {Usuario: usuario, Nombres: nombres, Apellidos: apellidos, Email: email, GeneroID: generoid, Password: password, DireccionCompleta: direccioncompleta, Telefono: telefono, nombreEmpresa:nombreempresa}, {headers : this.headers});
    }

    EditAdminInfo(usuarioAsociadoId, usuario, nombres, apellidos, email, direccioncompleta, telefono) {

      // tslint:disable-next-line: object-literal-shorthand
      // tslint:disable-next-line: max-line-length
      return this.http.put<IUsuariosAsociados[]>(`${environment.API_URL}User/EditAdminInfo/${JSON.parse(usuarioAsociadoId)}`, {Usuario: usuario, Nombres: nombres, Apellidos: apellidos, Email: email, DireccionCompleta: direccioncompleta, Telefono: telefono}, {headers : this.headers});
      }
}


