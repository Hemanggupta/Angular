import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  subject = new Subject<string[]>();
  constructor() {}

  set(data: string[]) {
    console.log(data);
    this.subject.next(data);
  }

  get(): Observable<string[]> {
    return this.subject.asObservable();
  }
}
