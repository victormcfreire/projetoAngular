import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const user = this.route.snapshot.data['user']

    this.form= this.fb.group({
      id: [user.id],
      name: [user.name, Validators.required],
      username: [user.username, Validators.required],
      password: [user.password, Validators.required]
    });
  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }
}
