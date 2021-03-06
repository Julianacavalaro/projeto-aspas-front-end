import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TemaModel } from '../model/TemaModel';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient
    ) { }

    token = { headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!) }

    getAllTemas(): Observable<TemaModel[]> {
      return this.http.get<TemaModel[]>('http://localhost:8081/tema', this.token)
    }
   
    getByIdTema(id: number): Observable<TemaModel> {
     return this.http.get<TemaModel>(`http://localhost:8081/tema/${id}`, this.token)
    }

    postTema(tema: TemaModel): Observable<TemaModel> {
      return this.http.post<TemaModel>('http://localhost:8081/tema', tema, this.token)
    }

    putTema(tema: TemaModel): Observable<TemaModel> {
      return this.http.put<TemaModel>('http://localhost:8081/tema', tema, this.token)
    }

    deleteTema(id: number): Observable<TemaModel> {
      return this.http.delete<TemaModel>(`http://localhost:8081/tema/${id}`, this.token)
     }
     getByNomeTema(nome: string): Observable<TemaModel[]> {
      return this.http.get<TemaModel[]>(`http://localhost:8081/tema/materia/${nome}`, this.token)
    }
}
