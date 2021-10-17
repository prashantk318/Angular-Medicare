
import { LoginService } from './../login.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class AuthInteceptor implements HttpInterceptor{
    constructor(private login:LoginService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req;
      //add the jwt token (local Storage) request
      const token= this.login.getToken();
      console.log("inside interceptor")
      if(token!=null){
          authReq=authReq.clone({setHeaders:{Authorization:`Bearer ${token}`}});
      }
      return next.handle(authReq);
    }   
}

export const AuthInteceptorProviders=[{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInteceptor,
    multi:true,
}
]