import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpCORSHeaderInterceptor } from './cors-policy-interceptor';
import { ContentTypeHeaderInterceptor } from './content-type-header-interceptor';
import { AccessControlAllowOriginHeaderInterceptor } from './allow-origin-header-interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpCORSHeaderInterceptor, multi:true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: AccessControlAllowOriginHeaderInterceptor, multi:true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: ContentTypeHeaderInterceptor, multi:true 
    }
  ]
})
export class HttpInterceptorsModule { }
