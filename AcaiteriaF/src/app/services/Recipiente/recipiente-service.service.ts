import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipienteServiceService {
  private baseUrl = 'http://localhost:8081/api/recipiente';

  constructor(private http: HttpClient) { }

  getRecipiente(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createRecipiente(recipiente: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, recipiente);
  }

  updateRecipiente(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteRecipiente(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getRecipienteList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  // not implemented in backend yet
  getRecipienteByNome(nome: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/nome/${nome}`);
  }
}
