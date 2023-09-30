import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemPedidoServiceService {
  private baseUrl = 'http://localhost:8081/api/itempedidos';

  constructor(private http: HttpClient) { }

  getItemPedido(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createItemPedido(itemPedido: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, itemPedido);
  }

  updateItemPedido(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteItemPedido(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getItemPedidosList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getItemPedidosByNome(nome: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/nome/${nome}`);
  }

  getItemPedidosByPedido(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/pedido/${id}`);
  }
}
