import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  constructor() {}
  getBooks() {
    return [
      {
        name: 'The Indian Metropolis',
        author: 'Feroze Varun Gandhi',
        image:
          'https://m.media-amazon.com/images/I/41cqBP3CKoL._SX331_BO1,204,203,200_.jpg',
        amount: 300.5,
      },
      {
        name: '8 Rules of Love',
        author: 'Jay Shetty',
        image:
          'https://m.media-amazon.com/images/I/41ka4efHjBL._SX329_BO1,204,203,200_.jpg',
        amount: 400,
      },
      {
        name: 'The Psychology of Money',
        author: 'Morgan Housel',
        image:
          'https://m.media-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg',
        amount: 350,
      },
      {
        name: 'The Power of Your Subconscious Mind',
        author: 'Joseph Murphy',
        image:
          'https://m.media-amazon.com/images/I/51QnuLIY2uL._SX322_BO1,204,203,200_.jpg',
        amount: 500,
      },
      {
        name: "Don't Believe Everything You Think",
        author: 'Joseph Nguyen',
        image:
          'https://m.media-amazon.com/images/I/41cfieTWUVL._SX323_BO1,204,203,200_.jpg',
        amount: 700,
      },
    ];
  }
}
