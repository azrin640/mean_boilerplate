// ** MODULES **
import { Http, HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// ** SERVICES **
import { AdminAuthGuardService } from './service/admin-guard/admin-auth-guard.service';
import { AuthGuardService } from './service/guard/auth-guard.service';
import { AuthService } from './service/auth/auth.service';
import { AdminProductService } from './service/admin-product/admin-product.service';

// ** COMPONENTS **
// Components Public
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './shop/products/products.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { ProductComponent } from './shop/product/product.component';

// Components Admin
import { AdminComponent } from './admin/admin/admin.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminProductFormComponent } from './admin/admin-product-form/admin-product-form.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminProductCategory } from './admin/admin-product-category/admin-product-category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    AdminComponent,
    NoAccessComponent,
    ProductComponent,
    ProductsComponent,
    AdminProductsComponent,
    AdminProductFormComponent,
    AdminProductComponent,
    AdminProductCategory
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegistrationComponent },
      { path: 'admin', 
        component: AdminComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      { path: 'admin/product/category', 
        component: AdminProductCategory,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },      
      { path: 'admin/products/new', 
        component: AdminProductFormComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },      
      { path: 'no-access', component: NoAccessComponent }
    ])
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AdminAuthGuardService,
    AdminProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
