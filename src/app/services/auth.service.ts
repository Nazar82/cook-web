import { Injectable } from '@angular/core';
import { Headers, Response, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { API_URL } from '../urls/urls';
import 'rxjs/add/operator/map';

@Injectable()

export class AuthService {

  authToken: string;
  user: string;
  options;
  headers;

  constructor(private http: HttpClient) { }

  addUser(user) {
    return this.http.post(`${API_URL}/auth/register`, user)
      .subscribe(
      (response) => console.log(response),
      (error) => console.error(error)
      );
  }

  login(user) {
    return this.http.post(`${API_URL}/auth/login`, user);
  }

  storeUserData(token, user): void {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(): string {
    return localStorage.getItem('token');
  }

  isAuthorized(): string {
    return localStorage.getItem('token');
  }

  logOut(): void {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}



