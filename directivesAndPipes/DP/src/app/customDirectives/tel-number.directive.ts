import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[TelNumber]',
})
export class TelNumberDirective {
  pattern = /^[0-9\-]*$/;

  constructor() {}

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    if (!this.pattern.test(input.value)) {
      input.value = input.value.replace(/[^0-9\-]/g, '');
    } else {
      let trimmed = input.value.replace(/\s+/g, '');
      if (trimmed.length > 12) {
        trimmed = trimmed.substr(0, 12);
      }

      trimmed = trimmed.replace(/-/g, '');

      let numbers = [];
      numbers.push(trimmed.substring(0, 3));
      if (trimmed.substr(3, 3) !== '') numbers.push(trimmed.substr(3, 3));
      if (trimmed.substr(6, 4) !== '') numbers.push(trimmed.substr(6, 4));
      // input.value = numbers.join('');
      input.value = numbers.join('-');
    }
  }
}
