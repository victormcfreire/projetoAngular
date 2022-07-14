import { Component, OnInit } from '@angular/core';
import { Observable, map, take } from 'rxjs';

import { UsuariosService } from './../shared/usuarios.service';
import { Usuario } from '../table/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  usuarios!: Usuario[];

  // get usuarios(): Usuario[]{
  //   return this.service.usersArray
  // }

  get users$(): Observable<Usuario[]>{
    return this.service.users$
  }

  constructor(
    private service: UsuariosService
  ) {}

  ngOnInit(): void {
    this.service.onRefresh();

    this.users$
      .pipe(
        take(1),
        map((res) => {
          let usuariosArray = res;
          return usuariosArray;
        })
      )
      .subscribe((v) => {
        this.getUsuariosArray(v.reverse());
      });
  }

  getUsuariosArray(data: any) {
    this.usuarios = data;
  }

}
