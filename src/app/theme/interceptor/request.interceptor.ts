import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';

import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req).map(event => {
            if (event instanceof HttpResponse) {
                if (event.status === 401) {
                    console.log('401');
                }
            }
            return event;
        })
    }
}