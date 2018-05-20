import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  register(credentials){    
    return this.http.post('/api/register', credentials)
     .map(response => {
        let result = response.json();
        if(result.status === 201){
          console.log(result);
          localStorage.setItem('user', JSON.stringify({
            token: result.token,
            id: result.id
          }));
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
          localStorage.setItem('user', JSON.stringify({
            token: result.token,
            id: result.id
          }));
          return true;
        }
        else{
          return false;
        }

      });
  }

  logout(){
    localStorage.removeItem('user');
  }

  isLoggedIn(){
    return tokenNotExpired();
  }
}