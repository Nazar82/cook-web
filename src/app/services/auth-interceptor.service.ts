import { Injectable, forwardRef, Inject, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private inj: Injector) { }
    token: string;
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authService = this.inj.get(AuthService);
        const authReq = req.clone({
            headers: req.headers.set('Authorization', authService.loadToken())
        });
        return next.handle(authReq);
    }
}




