import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() {}

  login(usuario: string, senha: string): boolean {
    let sucesso = false;
    if (usuario === 'bia' && senha === '123') {
      sucesso = true;
    }
    return sucesso;
  }
}
