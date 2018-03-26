import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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

    constructor(private http: HttpClient,
        private router: Router) { }

    addUser(user) {
        return this.http.post(`${API_URL}/auth/register`, user)
            .subscribe(
                (response) => {
                    alert(`Your account has been registered. Now You can login.`);
                    this.router.navigate(['/recipes']);
                },
                (error) => console.error(error)
            );
    }

    login(user) {
        return this.http.post(`${API_URL}/auth/login`, user);
    }

    storeUserData(token, user): void {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        const millisecondsInDay = 86400000;
        const timeToLogin = Date.now() + millisecondsInDay;
        localStorage.setItem('timer', JSON.stringify(timeToLogin));
        this.authToken = token;
        this.user = user;
    }

    loadToken(): string {
        return localStorage.getItem('token') || '';
    }

    loadUser(): string {
        return localStorage.getItem('user') || '{}';
    }

    isAuthorized(): string {
        return this.loadToken();
    }

    logOut(): void {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }
}



