import { Component } from '@angular/core';
import { RegisterForm } from 'src/app/interfaces/registerForm';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form: RegisterForm = {
    email: '',
    password: '',
    confirmPass: '',
  };
  onSubmit() {
    console.log(this.form);
  }
}
