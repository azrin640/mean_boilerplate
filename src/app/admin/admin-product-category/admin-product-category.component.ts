import { Component, OnInit } from '@angular/core';
import { AdminProductService } from '../../service/admin-product/admin-product.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-product-category',
  templateUrl: './admin-product-category.component.html',
  styleUrls: ['./admin-product-category.component.scss']
})
export class AdminProductCategory implements OnInit {

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  constructor(
    private adminProductService: AdminProductService) { }

  ngOnInit() {
  }

  register(category: HTMLInputElement){
    this.adminProductService.createCategory(category)
      .subscribe(
        response => {
          console.log(response.json());
        }, 
        (error: Response) => {
          if(error.status === 404){
            alert('Unable to save category, please try again');
            console.log('Error: ' + error.status);
          }
          else{
            alert('An unexpected error occured');
            console.log('Error:' + error.status);
          }
        });
  }

}
