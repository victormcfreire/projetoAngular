import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AlertModalService } from '../alert-modal.service';

import { UsuariosService } from './../usuarios.service';

@Component({
  selector: 'app-form-btn',
  templateUrl: './form-btn.component.html',
  styleUrls: ['./form-btn.component.css'],
})
export class FormBtnComponent implements OnInit {
  @Input() formulario!: FormGroup;

  constructor(
    private service: UsuariosService,
    private location: Location,
    private modal: AlertModalService
  ) {}

  ngOnInit(): void {}

  save(form: FormGroup) {

    if (form.valid) {
      let msgError = 'Erro ao criar usuário. Tente novamente';
      let msgSuccess = 'Usuário criado com sucesso';

      if (this.formulario.value.id) {
        msgError = 'Erro ao atualizar usuário. Tente novamente';
        msgSuccess = 'Usuário atualizado com sucesso!';
      }

      this.service.save(this.formulario.value).subscribe({
        next: (s) => {
          this.modal.showAlertSuccess(msgSuccess);
        },
        error: (e) => this.modal.showAlertDanger(msgError),
        complete: () => console.log('save complete'),
      });
      this.location.back();
    } else {
      console.log('formulario invalido');
      this.verificaValidacoesForm(form);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((campo) => {
      const controle: any = this.formulario.get(campo);
      controle?.markAllAsTouched();
      controle?.markAsDirty();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }
}
