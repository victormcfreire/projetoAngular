import { Observable } from 'rxjs';
import { UsuariosService } from './../shared/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../table/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id: number = 2;
  users!: Observable<Usuario[]>

  constructor(private service: UsuariosService) { }

  ngOnInit(): void {
    this.users = this.service.list();
  }

}
