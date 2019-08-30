import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  nome: string;
  objeto: {
    nome: string,
    apelido: string
  };
  bolinha: number;

  ngOnInit() {
    this.nome = '';
    this.objeto = { nome: 'Bianca', apelido: 'Nobrega'};
    this.bolinha = 0;
  }
}
