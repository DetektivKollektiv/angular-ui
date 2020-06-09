import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth } from 'aws-amplify';
import {AuthService} from '../auth-service/auth.service';
import {AuthState} from '../model/auth-state';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // this.authService.auth$.subscribe((authState: AuthState) => {
    //   request = request.clone({
    //     withCredentials : false,
    //     setHeaders: {
    //       Authorization: `Bearer ${authState.idToken}`
    //     }
    //   });
    //   return next.handle(request);
    // });

    return next.handle(request);
  }
}
