import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  subject = new BehaviorSubject<string[]>([
    'Enter First Name',
    'Enter Last Name',
  ]);
  constructor() {}

  set(data: string[]) {
    console.log(data);
    this.subject.next(data);
  }

  get(): Observable<string[]> {
    return this.subject.asObservable();
  }
}
