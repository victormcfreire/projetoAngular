import { Component, Input, OnInit } from '@angular/core';
import { catchError, EMPTY, map, Observable, tap } from 'rxjs';

import { Usuario } from './usuario';
import { UsuariosService } from './../shared/usuarios.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() usuarios$!: Observable<Usuario[]>;
  usuarios!: Usuario[];

  constructor(private service: UsuariosService) {}

  ngOnInit(): void {

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

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    //let returnedArray = contentArray.slice()
    //returnedArray = this.contentArray.slice(startItem, endItem);
  }
}
