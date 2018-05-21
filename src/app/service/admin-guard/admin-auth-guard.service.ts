import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AdminAuthGuardService implements CanActivate{

  constructor(
    private router: Router,
    private authService: AuthService 
  ) { }

  canActivate(){
    let user = this.authService.currentUser;
    if(user && user.admin){
      return true;
    }
    else{
      this.router.navigate(['/no-access']);
      return false;
    }
  }
}
