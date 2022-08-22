import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http
      .get(`${this.url}/users?per_page=12&delay=1`)
      .pipe(map((resp: any) => resp['data']));
  }

  getUser(userId: number) {
    return this.http
      .get(`${this.url}/users/${userId}`)
      .pipe(map((resp: any) => resp['data']));
  }
}
