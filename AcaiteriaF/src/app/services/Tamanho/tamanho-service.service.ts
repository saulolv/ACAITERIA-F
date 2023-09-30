import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TamanhoServiceService {
  private baseUrl = 'http://localhost:8081/api/tamanhos';

  constructor(private http: HttpClient) { }

  getTamanho(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTamanho(tamanho: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, tamanho);
  }

  updateTamanho(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteTamanho(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getTamanhosList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  // not implemented in backend yet
  getTamanhosByNome(nome: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/nome/${nome}`);
  }

  // not implemented in backend yet
  getTamanhosByProduto(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/produto/${id}`);
  }
}
