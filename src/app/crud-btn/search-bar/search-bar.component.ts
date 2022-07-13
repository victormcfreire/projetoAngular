import { UsuariosService } from './../../shared/usuarios.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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
    let value = this.queryField.value;
    this.searchTerm = value;
    this.service.sharedSearchTerm = this.searchTerm;
    console.log(this.service.sharedSearchTerm);
    //this.countries = this.allCountries.filter((val) => val.name.toLowerCase().includes(value));
  }
}
