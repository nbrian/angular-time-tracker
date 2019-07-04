import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

export interface Credentials {
  id: number;
  username: string;
  name: string;
  jwt: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: {username: string, password: string};
  credentials: Credentials;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<Credentials> {
    return this.http.post<Credentials>('time-tracker/login', {username, password});
  }

  logout(): Observable<string> {
    return Observable.create(observer => {
      setTimeout(() => {
        this.credentials = null;
        observer.next('Logout');
        observer.complete();
      }, 2000);

      }
    )
  }

  updateCredentials(credentials: Credentials) {
    this.credentials = credentials;
  }

  getCredentials() {
    return this.credentials;
  }


}
