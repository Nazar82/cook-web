import { Injectable } from '@angular/core';
import { Headers, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import 'rxjs/add/operator/map';



@Injectable()

export class AuthService {

    private userRegisterUrl = 'http://localhost:8080/auth/register';
    private userLoginUrl = 'http://localhost:8080/auth/login';
    authToken;
    user;


    constructor(private http: HttpClient) {}

    addUser(user) {
        return this.http.post(this.userRegisterUrl, user)
        .subscribe(
            (response) => console.log(response),
            (error) => console.error(error)
        );
      }

      login(user) {
        return this.http.post(this.userLoginUrl, user);
      }

      storeUserData(token, user) {
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
      }
}
