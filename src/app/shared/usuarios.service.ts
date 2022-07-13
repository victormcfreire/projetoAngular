import { AlertModalService } from './alert-modal.service';
import { map, mapTo, tap } from 'rxjs/operators';
import { Usuario } from './../table/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CrudService } from './../shared/crud.service';
import { environment } from './../../environments/environment';
import { EMPTY, Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService extends CrudService<Usuario> {
  users$!: Observable<Usuario[]>;
  usersArray!: Usuario[];
  selectedUsers: Usuario[] = [];
  sharedSearchTerm!: string;

  constructor(protected override _http: HttpClient, private alertService: AlertModalService) {
    super(_http, `${environment.API}`);
    this.users$ = this.list();
  }

  getUserSelected(data: Usuario[]) {
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      if(element.selected){
        console.log(element.name + element.selected)
        this.selectedUsers.push(element);
      }
    }
  }

  onRefresh() {
    console.log('recarregou');
    this.users$ = this.list().pipe(
      catchError((error) => {
        console.error(error);
        // this.error$.next(true);
        this.handleError();
        return EMPTY;
      })
    );
  }

  handleError() {
    this.alertService.showAlertDanger(
      'Erro ao carregar usuários. Tente novamente mais tarde.'
    );
  }

}
