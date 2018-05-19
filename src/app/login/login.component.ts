import { AuthService } from './../service/auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl()
  });

  private invalidLogin = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  login(credentials: HTMLInputElement){
    this.authService.login(credentials)
      .subscribe(result => {
        console.log(result);
        if(result){
          this.router.navigate(['/']);
        }
        else{
          this.invalidLogin = true;
        }
      });
  };


}
