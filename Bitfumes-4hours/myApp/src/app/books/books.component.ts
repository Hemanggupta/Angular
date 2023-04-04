import { Component, OnInit } from '@angular/core';
import { Book } from '../interfaces/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  constructor(private booksService: BooksService) {}
  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

  books: Book[] = [];

  // cart: Book[] = [];

  isHidden = true;
  searchText = '';
  btnClass: string = 'danger';
  // isDisabled() {
  //   this.isHidden = !this.isHidden;
  //   // if (this.isHidden) {
  //   //   this.btnClass = 'danger';
  //   // } else {
  //   //   this.btnClass = 'success';
  //   // }
  // }

  // addToCart(book: Book) {
  //   console.log(book);
  // }

  // changeDisable() {
  //   this.isDisabled = !this.isDisabled;
  // }
  // handleInput(event: any) {
  //   this.searchText = event.target.value;
  // }
}
