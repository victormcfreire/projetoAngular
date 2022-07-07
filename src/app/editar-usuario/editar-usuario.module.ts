import { EditarUsuarioComponent } from './editar-usuario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    EditarUsuarioComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  })
export class EditarUsuarioModule {}
