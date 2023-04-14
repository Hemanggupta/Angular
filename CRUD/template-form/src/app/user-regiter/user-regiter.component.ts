import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-regiter.component.html',
  styleUrls: ['./user-regiter.component.scss'],
})
export class UserRegiterComponent {
  showField = false;
  onSubmit(form: NgForm) {
    console.log(form);
  }
}
