import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ListaUsuarioComponent } from './usuarios/lista-usuario/lista-usuario.component';
import { DetalheUsuarioComponent } from './usuarios/detalhe-usuario/detalhe-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import {
  MatTableModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatButtonModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import { UsuariosService } from './usuarios/usuarios.service';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    ListaUsuarioComponent,
    DetalheUsuarioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [LoginService, UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule {}
