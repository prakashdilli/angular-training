import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class HttpIntercept implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const secureReq = req.clone({
        setHeaders: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          }
        });
    return next.handle(secureReq);
  }
}