import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { UsuariosService } from './../../shared/usuarios.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  searchTerm!: string;
  queryField = new FormControl();

  constructor(private service: UsuariosService) {}

  ngOnInit(): void {}

  onSearch() {
    let value = this.queryField.value.trim('');
    this.searchTerm = value;
    this.service.sharedSearchTerm = this.searchTerm;
  }
}
