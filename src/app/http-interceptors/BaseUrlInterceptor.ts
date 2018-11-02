import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import * as Observable_1 from 'rxjs';
import { BACKEND_URL } from '../../environments/environment';


@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable_1.Observable<HttpEvent<any>> {
    if (BACKEND_URL) {
      req = req.clone({
        url: `${BACKEND_URL}${req.url}`
      });
      console.log('intercepted!');
      console.log(BACKEND_URL);
    }
    return next.handle(req);
  }
}
