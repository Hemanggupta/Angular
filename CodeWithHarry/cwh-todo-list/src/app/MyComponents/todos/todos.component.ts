import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: 'This is title1',
        desc: 'Description 1',
        active: true,
      },
      {
        sno: 2,
        title: 'This is title2',
        desc: 'Description 2',
        active: true,
      },
      {
        sno: 3,
        title: 'This is title3',
        desc: 'Description 3',
        active: true,
      },
    ];
  }
}
