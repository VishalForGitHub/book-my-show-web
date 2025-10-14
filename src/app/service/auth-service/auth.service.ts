import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrlForLogIn:string='https://book-myshow-service.onrender.com/user/login';
  private readonly apiUrlForSignup:string='https://book-myshow-service.onrender.com/user/create';
  constructor(
    private http:HttpClient
  ) { }

  login(loginRequest:any):Observable<any>{
    return this.http.post(this.apiUrlForLogIn,loginRequest);
  }

  signup(signupRequest:any):Observable<any>{
    return this.http.post(this.apiUrlForSignup,signupRequest);
  }
}
