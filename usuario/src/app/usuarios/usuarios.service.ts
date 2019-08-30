import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private httpClient: HttpClient) {}

  getUsuario() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
}
