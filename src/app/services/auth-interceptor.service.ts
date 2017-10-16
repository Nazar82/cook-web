import { Injectable, forwardRef, Inject, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    token: string;
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('token')) {
            this.token = localStorage.getItem('token');
        } else {
            this.token = '';
        }
        const authReq = req.clone({
            headers: req.headers.set('Authorization', this.token)
        });
        return next.handle(authReq);
    }
}




