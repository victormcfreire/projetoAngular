import { map } from 'rxjs/operators';
import { AlertModalService } from './../shared/alert-modal.service';
import { catchError, EMPTY, Observable } from 'rxjs';
import { UsuariosService } from './../shared/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../table/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users$!: Observable<Usuario[]>;
  usuarios!: Usuario[];

  constructor(
    private service: UsuariosService,
    private alertService: AlertModalService
  ) {}

  ngOnInit(): void {
    this.service.onRefresh();
    this.users$ = this.service.users$

    this.users$
      .pipe(
        map((res) => {
          let usuariosArray = res;
          return usuariosArray;
        })
      )
      .subscribe((v) => {
        this.getUsuariosArray(v);
      });
  }

  getUsuariosArray(data: any) {
    this.usuarios = data;
    console.log(this.usuarios);
  }
}
