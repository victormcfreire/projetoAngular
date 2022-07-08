import { FormDebugComponent } from './form-debug/form-debug.component';
import { RouterModule } from '@angular/router';
import { FormBtnComponent } from './form-btn/form-btn.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';



@NgModule({
  declarations: [
    FormBtnComponent,
    FormDebugComponent,
    AlertModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FormBtnComponent, FormDebugComponent, AlertModalComponent]
})
export class SharedModule { }
