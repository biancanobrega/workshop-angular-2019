import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario: string;
  senha: string;
  mensagemErro: string;

  constructor(private router: Router, private loginService: LoginService ) {}
  ngOnInit() {
    this.mensagemErro = '';
  }
  login(): void {
    if (this.loginService.login(this.usuario, this.senha)) {
      this.router.navigate(['usuarios']);
    } else {
      this.mensagemErro = 'Usuário e/ou senha inválido(s)';
    }
  }
}
