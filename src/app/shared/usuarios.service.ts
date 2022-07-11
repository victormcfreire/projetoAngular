import { map, mapTo, tap } from 'rxjs/operators';
import { Usuario } from './../table/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CrudService } from './../shared/crud.service';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService extends CrudService<Usuario> {
  users!: Observable<Usuario[]>;
  usersArray!: Usuario[];
  selectedUsers: Usuario[] = [];

  constructor(protected override _http: HttpClient) {
    super(_http, `${environment.API}`);
    this.users = this.list();
  }

  getUserSelected(data: Observable<Usuario[]>){
    data.pipe(tap((users) => (this.usersArray = users))).subscribe({
      next: (res) => {
        for (let i = 0; i < res.length; i++) {
          const element = res[i];
          console.log(element);
          if (element.selected) {
            this.selectedUsers.push(element);
          }
          else{
            console.log(element.id);
          }
        }
      },
      error: err => console.log(err),
      complete: () => {
        console.log(this.selectedUsers);
        console.log(this.usersArray);
      }
    });
  }
}
