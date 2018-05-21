import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(route, state: RouterStateSnapshot){
    if(this.authService.isLoggedIn()){
      return true;
    } 
    else{
      this.router.navigate(
        ['/login'], 
        {queryParams: {returnUrl: state.url}}
      );
      return false;
    }

  }


}
