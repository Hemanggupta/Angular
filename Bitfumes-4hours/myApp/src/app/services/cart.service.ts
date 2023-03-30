import { Injectable } from '@angular/core';
import { Book } from '../interfaces/Book';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Book[] = [];

  index = 0;

  constructor() {}

  add(book: Book) {
    // console.log(book);

    this.cart.push(book);
  }
  get() {
    return this.cart;
  }
  remove(book: Book) {
    this.index = this.cart.indexOf(book);
    console.log(this.index);
    this.cart.splice(this.index, 1);
  }
}
