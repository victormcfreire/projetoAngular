import { Component, Input, OnInit } from '@angular/core';

import { Usuario } from './usuario';
import { UsuariosService } from './../shared/usuarios.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() usuarios!: Usuario[];

  usuariosPerPage!: Usuario[];
  p: number = 1;

  get searchTerm(): string {
    return this.service.sharedSearchTerm;
  }

  constructor(private service: UsuariosService) {}

  ngOnInit(): void {}

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.usuariosPerPage = this.usuarios.slice(startItem, endItem);
  }
}
