import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcompanhamentoServiceService {
  private baseUrl = 'http://localhost:8081/api/acompanhamentos';

  constructor(private http: HttpClient) { }

  getAcompanhamento(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createAcompanhamento(acompanhamento: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, acompanhamento);
  }

  updateAcompanhamento(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteAcompanhamento(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAcompanhamentosList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getAcompanhamentosByNome(nome: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/nome/${nome}`);
  }
}
