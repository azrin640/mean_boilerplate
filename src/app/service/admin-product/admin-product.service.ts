import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { AuthHttp } from 'angular2-jwt';


@Injectable()
export class AdminProductService {

  constructor(
    private http: Http,
    private authHttp: AuthHttp
  ) { }

  createCategory(category){
    return this.authHttp.post('/api/category', category);
  }

  getCategories(){
    return this.http.get('/api/categories');
  }

  createProduct(product){
    return this.http.post('/api/product', product); 
  }

  getProducts(){
    return this.http.get('/api/products');
  }

  getProduct(productId){
    return this.http.get('/api/product/' + productId);
  }

  updateProduct(productId, product){  
    return this.http.post('/api/product/update/' + productId, product);
  }

  deleteProduct(productId, product){
    return this.http.post('/api/product/delete/' + productId, product);
  }

}
