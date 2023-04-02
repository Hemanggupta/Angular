import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/interfaces/loginForm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // email: string = '';
  form: LoginForm = {
    email: '',
    password: '',
  };
  onSubmit() {
    console.log(this.form);
  }
}
