import { AlertModalService } from './../shared/alert-modal.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UsuariosService } from './../shared/usuarios.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
  selectedUsersArray!: Usuario[];

  constructor(
    private router: Router,
    private service: UsuariosService,
    private alertService: AlertModalService
  ) {}

  ngOnInit(): void {}

  onEdit(id: number, data: Usuario[]) {
    this.selectedUsersArray = [];
    this.getUserSelected(data);
    if (this.selectedUsersArray.length > 1) {
      this.alertService.showAlertWarning(
        'Escolha apenas um registro para editar.'
      );
    } else if (this.selectedUsersArray.length == 0) {
      this.alertService.showAlertWarning(
        'Escolha pelo menos um registro para editar.'
      );
    } else {
      this.router.navigate(['alterarUsuario', this.selectedUsersArray[0].id]);

      console.log('vai editar');
    }
  }

  getUserSelected(users: Usuario[]) {
    for (let i = 0; i < users.length; i++) {
      const element = users[i];
      if (element.selected) {
        this.selectedUsersArray.push(element);
      }
    }
  }

  onDelete(usuarios: Usuario[]) {
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
              this.service.onRefresh();
              console.log('deletou o usuario: ' + element);
            },
            error: (error) => {
              this.alertService.showAlertDanger(
                'Erro ao remover curso. Tente novamente mais tarde.'
              );
            },
          });
      }
    }
  }
}
