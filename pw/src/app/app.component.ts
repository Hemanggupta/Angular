import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  passLength = 0;
  useLetter = false;
  useNumbs = false;
  useSymbols = false;
  constructor() {}
  setPassLength(e: Event) {
    if (!isNaN(+(e.target as HTMLInputElement).value)) {
      this.passLength = +(e.target as HTMLInputElement).value;
    }
  }

  onSubmit() {
    const numbers = '1234567890';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()_+';
    let validChar = '';
    if (this.useLetter) {
      validChar += letters;
    }
    if (this.useNumbs) {
      validChar += numbers;
    }
    if (this.useSymbols) {
      validChar += symbols;
    }
    let generatedPass = '';
    if (validChar) {
      for (let i = 0; i < this.passLength; i++) {
        let index = Math.floor(Math.random() * validChar.length);
        generatedPass += validChar[index];
        console.log(generatedPass);
      }
      this.password = generatedPass;
    }
  }
}
