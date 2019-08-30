import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../usuarios.model';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.scss']
})
export class ListaUsuarioComponent implements OnInit {
  @Output()
  usuario = new EventEmitter<Usuario> ();
  usuarios: Array<Usuario>;
  displayedColumns: string[] = ['id', 'name', 'username', 'email'];

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {
    this.usuariosService.getUsuario()
    .subscribe(
      (result: Array<Usuario>) => {
        this.usuarios = result;
      },
      error => {
        console.log('Ih, deu erro: ', error);
      }
    );
  }
}
