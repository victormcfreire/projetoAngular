import { RouterModule } from '@angular/router';
import { FormBtnComponent } from './form-btn/form-btn.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    FormBtnComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FormBtnComponent]
})
export class SharedModule { }
