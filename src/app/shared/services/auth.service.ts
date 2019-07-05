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

  isAuthenticated(): boolean {
    return this.credentials ? !!this.credentials.jwt : false;
  }

  login(username: string, password: string): Observable<Credentials> {
    return this.http.post<Credentials>('auth/login', {username, password});
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
