import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../usuarios.model';

@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.scss']
})
export class DetalheUsuarioComponent implements OnInit {

  @Input()
  usuario: Usuario;

  constructor() { }

  ngOnInit() {
  }

}
