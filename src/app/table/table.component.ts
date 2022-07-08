import { Usuario } from './usuario';
import { UsuariosService } from './../shared/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  usuarios$!: Observable<Usuario[]>;
  selectedUsers!: Usuario[];
  totalItems!: number;

  constructor(private service: UsuariosService) { }

  ngOnInit(): void {
    this.usuarios$ = this.service.list();

    //this.service.list().subscribe(dados => this.usuarios = dados);
    //this.onRefresh();
  }

  onRefresh() {
    /* this.usuarios$ = this.service.list().pipe(
      catchError((error) => {
        console.error(error);
        //this.error$.next(true);
        //this.handleError();
        return EMPTY;
      })
    ); */

    //this.usuarios = this.service.users;
  }


}
