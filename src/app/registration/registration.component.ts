import { AuthService } from './../service/auth/auth.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {  

  form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl(),
      confirmPassword: new FormControl()
  });

  private invalidLogin = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {}  

  register(credentials: HTMLInputElement){
    this.authService.register(credentials)
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

  get name(){
    return this.form.get('name');
  };
}
