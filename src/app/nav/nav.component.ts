import { AuthService } from './../service/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // Var Settings
  public isCollapsed = true;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
