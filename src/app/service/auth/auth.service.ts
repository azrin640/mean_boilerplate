import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  register(credentials){    
    return this.http.post('/api/register', credentials)
     .map(response => {
        let result = response.json();
        if(result.status === 201){
          console.log(result);
          localStorage.setItem('token', result.token);
          return true;
        }
        if(result.status === 400){
          return false;
        }
     });
  }

  login(credentials){
    return this.http.post('/api/login', credentials)
      .map(response => {
        let result = response.json();
        console.log('Result :' + result.status);

        if(result.status === 202){
          localStorage.setItem('token', result.token);
          return true;
        }
        else{
          return false;
        }

      });
  }

  logout(){
    localStorage.removeItem('token');
  }

  isLoggedIn(){
    return tokenNotExpired();
  }

  get currentUser(){
    let token = localStorage.getItem('token');
    if(!token) return null;

    return new JwtHelper().decodeToken(token);
  }
}