import { Router } from '@angular/router';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { AlertModalService } from './../shared/alert-modal.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UsuariosService } from './../shared/usuarios.service';
import { Usuario } from '../table/usuario';
import { EMPTY, take, switchMap } from 'rxjs';

@Component({
  selector: 'app-crud-btn',
  templateUrl: './crud-btn.component.html',
  styleUrls: ['./crud-btn.component.css'],
})
export class CrudBtnComponent implements OnInit {
  @Input() usuarios!: Usuario[];

  @ViewChild('deleteModal') deleteModal: any;

  deleteModalRef!: BsModalRef;
  userSelected!: Usuario;

  get selectedUsersArray(): Usuario[] {
    return this.service.selectedUsers;
  }

  set selectedUsersArray(value: Usuario[]) {
    this.service.selectedUsers = value;
  }

  constructor(
    private router: Router,
    private service: UsuariosService,
    private alertService: AlertModalService
  ) {}

  ngOnInit(): void {}

  onEdit(data: Usuario[]) {
    this.selectedUsersArray = [];
    this.service.getUserSelected(data);
    if (this.selectedUsersArray.length > 1) {
      this.alertService.showAlertWarning(
        'Escolha apenas um usuário para editar.'
      );
    } else if (this.selectedUsersArray.length == 0) {
      this.alertService.showAlertWarning(
        'Escolha pelo menos um usuário para editar.'
      );
    } else {
      this.router.navigate(['alterarUsuario', this.selectedUsersArray[0].id]);
    }
  }

  onDelete(usuarios: Usuario[]) {
    this.selectedUsersArray = [];
    this.service.getUserSelected(usuarios);
    if (this.selectedUsersArray.length == 0) {
      this.alertService.showAlertWarning('Escolha pelo menos um usuário.');
    } else {
      const result$ = this.alertService.showConfirm(
        'Confirmação',
        'Tem certeza que deseja remover esse(s) registro(s)?'
      );

      for (let i = 0; i < usuarios.length; i++) {
        const element = usuarios[i];
        if (element.selected) {
          result$
            .asObservable()
            .pipe(
              take(1),
              switchMap((result) =>
                result ? this.service.delete(element.id) : EMPTY
              )
            )
            .subscribe({
              next: (success) => {
                this.alertService.showAlertSuccess(
                  `Usuário(s) deletado(s) com sucesso`
                );
                this.service.onRefresh();
              },
              error: (error) => {
                this.alertService.showAlertDanger(
                  'Erro ao remover usuário(s). Tente novamente mais tarde.'
                );
              },
            });
        }
      }
    }
  }
}
