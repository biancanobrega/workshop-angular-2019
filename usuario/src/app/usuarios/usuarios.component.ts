import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuarios.model';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  usuario: Usuario;
  constructor() {}

  ngOnInit() {}
}
