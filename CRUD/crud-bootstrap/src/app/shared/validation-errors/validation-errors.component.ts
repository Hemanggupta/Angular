import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  AbstractControlDirective,
  FormControl,

} from '@angular/forms';

@Component({
  selector: 'errors-component',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.scss'],
})
export class ValidationErrorsComponent {
  errorMsgList: string[] = [];

  @Input() controlName: AbstractControl | AbstractControlDirective =
    new FormControl();
  // constructor() {
  //   this.controlName;
  // }

  errorMessage: any = {
    required: () => `This field is required`,
    maxlength: (params: any): string =>
      `Maximum ${params.requiredLength} characters are allowed`,
    minlength: (params: any): string =>
      `Minimum ${params.requiredLength} characters are required`,
    pattern: () => `Invalid format`,
  };

  listErrors() {
    if (!this.controlName) return [];
    if (this.controlName.errors) {
      // console.log(this.controlName.errors);
      this.errorMsgList = [];
      Object.keys(this.controlName.errors).map((error: string) => {
        // console.log(error);

        this.controlName.touched || this.controlName.dirty
          ? this.errorMsgList.push(
              this.errorMessage[error](this.controlName.errors?.[error])
            )
          : '';
      });
      // console.log(this.errorMsgList);
      return this.errorMsgList;
    } else {
      return [];
    }
  }
}
