import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {

  formularioContacto: FormGroup;

  constructor(private form: FormBuilder) {

    this.formularioContacto = this.form.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]

    });

  }

  hasErrors( controllerName: string, errorType: string) {
    return this.formularioContacto.get(controllerName)?.hasError(errorType) 
                && this.formularioContacto.get(controllerName)?.touched;
  }

  enviar() {
    console.log(this.formularioContacto);
  }









  // public user: any = {
  //   email: '',
  //   password: ''
  // };

  // enviar() {
  //   console.log(this.user);
  // }
}
