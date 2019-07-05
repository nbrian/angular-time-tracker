import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[];
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('time-tracker-api/users').pipe(map(res => {
      this.users = res;
      return res;
    }));
  }

  addUser(user: User) {
    this.users.push(user);
  }

  getUser(id: number): User {
    return this.users.find(u => u.id === id);
  }

  getCachedUsers(): User[] {
    return this.users;
  }

  updateCachedUsers(users: User[]) {
    this.users = users;
  }


}
