import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, map, Subscription } from 'rxjs';

import { UsuariosService } from './../shared/usuarios.service';
import { Usuario } from '../table/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  //usuarios!: Usuario[];
  usersSub!: Subscription;

  get usuarios(): Usuario[] {
    return this.service.usersArray;
  }

  set usuarios(value: Usuario[]) {
    this.service.usersArray = value;
  }

  get users$(): Observable<Usuario[]> {
    return this.service.users$;
  }

  constructor(private service: UsuariosService) {}

  ngOnInit(): void {
    this.usersSub = this.users$.pipe(map((res) => res)).subscribe({
      next: (v) => {
        console.log('deveria mudar');
        this.getUsuariosArray(v.reverse());
      },
      error: (e) => console.log(e),
    });
  }

  getUsuariosArray(data: any) {
    this.usuarios = data;
  }

  ngOnDestroy() {
    this.usersSub.unsubscribe();
  }
}
