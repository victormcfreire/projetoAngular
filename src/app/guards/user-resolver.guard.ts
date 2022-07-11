import { UsuariosService } from './../shared/usuarios.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Resolve,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Usuario } from '../table/usuario';

@Injectable({
  providedIn: 'root',
})
export class UserResolverGuard implements Resolve<Usuario> {
  constructor(private service: UsuariosService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    if (route.params && route.params['id']) {
      return this.service.getById(route.params['id']);
    }

    return of({
      id: null,
      name: null,
      username: null,
      password: null,
      selected: null,
    });
  }
}
