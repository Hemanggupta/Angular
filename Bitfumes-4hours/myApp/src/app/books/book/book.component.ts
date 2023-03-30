import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Book } from '../../interfaces/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
}) //implements OnInit, OnDestroy
export class BookComponent {
  constructor(private cartServices: CartService) {}
  @Input() book: Book = {} as Book; //forcing that {} is Book
  @Input() numIndex: number = 0;
  isInCart = false;

  // @Output() emitBook = new EventEmitter<Book>();

  addToCart() {
    this.isInCart = true;
    this.cartServices.add(this.book);
    // this.emitBook.emit(this.book);
  }
  removeFromCart() {
    this.isInCart = false;
    this.cartServices.remove(this.book);
  }

  myInterval: any;
  // ngOnInit(): void {
  //   this.myInterval = setInterval(() => {
  //     console.log('Hello');
  //   }, 1000);
  // }
  // ngOnDestroy(): void {
  //   clearInterval(this.myInterval);
  //   console.log({ hello: 'Hello' });
  // }
}
