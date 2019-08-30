import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {
  @Input()
  titulo: string;

  @Output()
  id = new EventEmitter<number>();

  contador: number;

  constructor() { }

  ngOnInit() {
    this.contador = 0;
  }

  evento() {
    console.log('PASSOU AQUI');
    this.contador ++;
    this.id.emit(this.contador);
  }

}
