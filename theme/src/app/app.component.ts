import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dark = true;
  toggle() {
    this.dark = !this.dark;
    if (this.dark) {
      if (document.body.classList.contains('light')) {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
      }
    } else {
      if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
      }
    }
  }
  // toggle() {
  //   this.dark = !this.dark;
  //   if (this.dark) {
  //     document.documentElement.style.setProperty('--primary-color', '#000');
  //     document.documentElement.style.setProperty('--theme-color-1', '#fff');
  //   } else {
  //     document.documentElement.style.setProperty('--primary-color', '#fff');
  //     document.documentElement.style.setProperty('--theme-color-1', '#000');
  //   }
  // }
}
