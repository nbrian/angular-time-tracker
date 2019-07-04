import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<{id: string, username: string, jwt: string}> {
    console.log('AuthService login');
    return this.http.post<{id: string, username: string, jwt: string}>
      ('/login', {username, password});
  }
}
