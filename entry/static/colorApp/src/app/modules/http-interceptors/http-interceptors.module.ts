import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpCORSHeaderInterceptor } from './cors-policy-interceptor';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpCORSHeaderInterceptor, multi:true
    }
  ]
})
export class HttpInterceptorsModule { }
