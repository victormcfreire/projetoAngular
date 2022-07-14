import { SearchBarComponent } from './crud-btn/search-bar/search-bar.component';
import { CrudBtnModule } from './crud-btn/crud-btn.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { CrudBtnComponent } from './crud-btn/crud-btn.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReversePipe } from './pipes/reverse.pipe';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HomeComponent,
    CrudBtnComponent,
    ReversePipe,
    SearchBarComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CrudBtnModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    ModalModule.forRoot(),
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
