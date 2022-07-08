import { Usuario } from './../table/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CrudService } from './../shared/crud.service';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService extends CrudService<Usuario> {

  constructor(protected override _http: HttpClient) {
    super(_http, `${environment.API}`);
  }

}
