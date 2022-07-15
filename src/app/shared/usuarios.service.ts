import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AlertModalService } from './alert-modal.service';
import { Usuario } from './../table/usuario';
import { CrudService } from './../shared/crud.service';
import { environment } from './../../environments/environment';
import { EMPTY, Observable, catchError, map, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService extends CrudService<Usuario> {
  users$!: Observable<Usuario[]>;
  usersArray!: Usuario[];
  selectedUsers: Usuario[] = [];
  sharedSearchTerm!: string;

  constructor(
    protected override _http: HttpClient,
    private alertService: AlertModalService
  ) {
    super(_http, `${environment.API}`);
    this.users$ = this.list().pipe(
      catchError((error) => {
        console.error(error);
        this.handleError();
        return EMPTY;
      }));
  }

  getUserSelected(data: Usuario[]) {
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      if (element.selected) {
        this.selectedUsers.push(element);
      }
    }
  }

  onRefresh() {
    this.users$
      .pipe(
        take(1),
        map((res) => res)
      )
      .subscribe({
        next: (v) => {
          this.getUsuariosArray(v.reverse());
        },
        error: (e) => this.handleError()
      });
  }

  getUsuariosArray(data: any) {
    this.usersArray = data;
  }

  handleError() {
    this.alertService.showAlertDanger(
      'Erro ao carregar usuários. Tente novamente mais tarde.'
    );
  }
}
