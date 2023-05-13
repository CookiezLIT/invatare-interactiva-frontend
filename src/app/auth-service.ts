import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = "http://localhost:8000/token";
  private token: string;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.set('grant_type', '');
    body.set('username', username);
    body.set('password', password);
    body.set('scope', '');
    body.set('client_id', '');
    body.set('client_secret', '');

    return this.http.post(this.apiUrl, body.toString(), { headers });

    //return this.http.post(this.apiUrl, body);
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

}
