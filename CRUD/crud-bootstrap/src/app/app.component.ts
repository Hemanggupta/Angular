import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from './services/crud.service';
import { User } from './interfaces/users';
import { DbOperations } from './enums/db-operations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // registerForm: FormGroup = new FormGroup({});
  genderOptions = ['Mr', 'Mrs', 'Master', 'Miss'];
  EmailPattern = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  registerForm: FormGroup = new FormGroup({});
  users: any = [];
  submitted = false;
  btnTextDecider = true; //to update button text
  dbops: DbOperations = 1;
  constructor(
    private _toastr: ToastrService,
    private _fb: FormBuilder,
    private _crudService: CrudService
  ) {}

  ngOnInit(): void {
    this.setFormState();
    this.getAllUsers();
  }

  setFormState() {
    this.btnTextDecider = true;
    this.dbops = DbOperations.create;
    this.registerForm = this._fb.group({
      id: [],
      title: ['', Validators.required],
      firstName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ]),
      ],
      lastName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ]),
      ],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.EmailPattern),
        ]),
      ],
      dob: ['', Validators.required],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15),
        ]),
      ],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.required],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // console.log(this.registerForm.value);
    if (this.registerForm.invalid) {
      return;
    } else {
      // console.log(this.registerForm.value);
      switch (this.dbops) {
        case DbOperations.create:
          this._crudService
            .addUser(this.registerForm.value)
            .subscribe((res) => {
              this._toastr.success('User Added!');
              this.getAllUsers();
              this.onCancel();
            });
          break;
        case DbOperations.update:
          this._crudService
            .updateUser(this.registerForm.value)
            .subscribe((res) => {
              this._toastr.success('User Updated!');
              this.getAllUsers();
              this.onCancel();
            });
          break;
      }
    }
  }
  onCancel() {
    this.registerForm.reset();
    this.btnTextDecider = true;
    this.submitted = false;
  }
  getAllUsers() {
    this._crudService.getUsers().subscribe((res) => {
      // console.log(res);
      this.users = res;
    });
  }

  Edit(id: number) {
    this.btnTextDecider = false;
    this.dbops = DbOperations.update;
    let user: User = this.users.find((u: User) => u.id === id)!;
    this.registerForm.patchValue(user);
  }
  Delete(id: number) {
    if (confirm('Delete this user record. \nAre you sure?')) {
      this._crudService.deleteUser(id).subscribe((res) => {
        this.getAllUsers();
        this._toastr.success('Deleted Successfully');
      });
    } else {
      this._toastr.info('Deletion Cancelled');
    }
  }
}
