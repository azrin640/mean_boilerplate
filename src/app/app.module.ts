import { AdminAuthGuardService } from './service/admin-guard/admin-auth-guard.service';
import { AuthGuardService } from './service/guard/auth-guard.service';
import { Http, HttpModule } from '@angular/http';
import { AuthService } from './service/auth/auth.service';
import { RouterModule, Routes } from '@angular/router';
import { PostService } from './service/post/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { AdminComponent } from './admin/admin.component';
import { NoAccessComponent } from './no-access/no-access.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    AdminComponent,
    NoAccessComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'admin', 
        component: AdminComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      { path: 'register', component: RegistrationComponent },
      { path: 'no-access', component: NoAccessComponent }
    ])
  ],
  providers: [
    PostService,
    AuthService,
    AuthGuardService,
    AdminAuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
