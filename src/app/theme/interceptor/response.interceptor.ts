import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';

import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      url: 'http://www.ds.com/api/admin/' + req.url,
      setHeaders: {
        'Accept': 'application/vnd.ds.v1+json'
      }
    });
    return next.handle(req);
  }
}