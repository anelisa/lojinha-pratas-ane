import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../authentication/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(!this.auth.getAuthToken()){
      return next.handle(request)
    }

    const authReq = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${this.auth.getAuthToken()}`)
    })

    return next.handle(authReq);
  }
}
