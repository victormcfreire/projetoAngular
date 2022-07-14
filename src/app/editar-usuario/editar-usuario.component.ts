import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsuariosService } from './../shared/usuarios.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'],
})
export class EditarUsuarioComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const user = this.route.snapshot.data['user'];

    this.formulario = this.fb.group({
      id: [user.id],
      name: [user.name, Validators.required],
      username: [user.username, Validators.required],
      password: [user.password, Validators.required],
    });
  }

  hasError(field: string) {
    return this.formulario.get(field)?.errors;
  }
}
