import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/users';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  URL = `http://localhost:3000/Users/`;

  constructor(private _http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(this.URL); // Observable<User[]> <User[]>
  }
  getUser(userId: number): Observable<User[]> {
    return this._http.get<User[]>(`${this.URL}/${userId}`);
  }

  addUser(user: User) {
    return this._http.post(`${this.URL}`, user);
  }
  updateUser(user: User) {
    return this._http.put(`${this.URL}/${user.id}`, user);
  }

  deleteUser(userId: number) {
    return this._http.delete(`${this.URL}/${userId}`);
  }
}
