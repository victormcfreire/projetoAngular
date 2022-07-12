import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { CrudBtnComponent } from './crud-btn/crud-btn.component';
import { SearchBarComponent } from './crud-btn/search-bar/search-bar.component';
import { PaginationConfig, PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HomeComponent,
    CrudBtnComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    ModalModule.forRoot(),
    PaginationModule
  ],
  providers: [PaginationConfig],
  bootstrap: [AppComponent],
})
export class AppModule {}
