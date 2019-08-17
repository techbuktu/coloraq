import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable()
export class AccessControlAllowOriginHeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const requestClone = req.clone({
            headers: req.headers.set('Access-Control-Allow-Origin', '*')
        });
        return next.handle(requestClone);
    }
};
