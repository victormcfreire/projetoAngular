import { NovoUsuarioModule } from './../novo-usuario/novo-usuario.module';
import { EditarUsuarioModule } from './../editar-usuario/editar-usuario.module';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { NovoUsuarioComponent } from './../novo-usuario/novo-usuario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, HomeRoutingModule, EditarUsuarioModule, NovoUsuarioModule],
})
export class HomeModule {}