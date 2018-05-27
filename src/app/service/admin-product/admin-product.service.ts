import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';


@Injectable()
export class AdminProductService {

  constructor(private http: Http) { }

  createCategory(category){
    return this.http.post('/api/category', category);
  }

}
