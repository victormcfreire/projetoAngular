import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-btn',
  templateUrl: './form-btn.component.html',
  styleUrls: ['./form-btn.component.css']
})
export class FormBtnComponent implements OnInit {

  @Input() formulario!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }


  save(form: FormGroup){
    console.log(form);
    /* this.formulario = form;
    console.log('this.formulario: ' + this.formulario + '/n' + 'form: ' + form);
    if (form.valid) {
      console.log('submitted: ' + form.value)
    } else {
      console.log('formulario invalido');
      this.verificaValidacoesForm(form);
    } */
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle: any = this.formulario.get(campo);
      controle?.markAllAsTouched();
      controle?.markAsDirty();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }
}
