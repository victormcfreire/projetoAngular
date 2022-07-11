import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UsuariosService } from './../shared/usuarios.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../table/usuario';
import { Observable, tap, EMPTY } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-crud-btn',
  templateUrl: './crud-btn.component.html',
  styleUrls: ['./crud-btn.component.css'],
})
export class CrudBtnComponent implements OnInit {
  @Input() usuarios!: Observable<Usuario[]>;
  @ViewChild('deleteModal') deleteModal: any;

  deleteModalRef!: BsModalRef;
  userSelected!: Usuario;
  selectedUsersArray!: Usuario[];

  constructor(
    private router: Router,
    private service: UsuariosService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {}

  onEdit(id: number, data: any) {
    this.router.navigate(['alterarUsuario', id]);
    this.service.getUserSelected(data);
    console.log('vai editar');
  }

  onDelete(usuarios: Observable<Usuario[]>) {
    usuarios
      .pipe(
        tap((users) =>{
           users.filter(user => user.selected ? users.push(user) : EMPTY)
        })
      )
      .subscribe(res => {
        this.selectedUsersArray = res;
      })
    this.deleteModalRef = this.modalService.show(this.deleteModal, {
      class: 'modal-sm',
    });
  }

  onConfirmDelete() {}

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }
}
