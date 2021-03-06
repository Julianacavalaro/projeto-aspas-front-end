import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { UsuarioModel } from '../model/UsuarioModel';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  logar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>('http://localhost:8081/usuario/logar', userLogin)

  }

  cadastrar(user: UsuarioModel): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>('http://localhost:8081/usuario/cadastrar', user)
  }

  btnSair() {

    let ok = false;
    let token = localStorage.getItem('token')
    if (token != null) {
      ok = true
    }
    return ok
  }

  btnLogin() {
    let ok = false;
    let token = localStorage.getItem('token')

    if (token == null) {
      ok = true
    }
    return ok
  }

}