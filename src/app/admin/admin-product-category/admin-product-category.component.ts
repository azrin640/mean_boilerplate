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
  invalidCategory = false;

  constructor(
    private adminProductService: AdminProductService) { }

  ngOnInit() {
  }

  register(category: HTMLInputElement){
    this.adminProductService.createCategory(category)
      .subscribe(response => {
          let result = response.json();  
          if(result.code === 11000){
            this.invalidCategory = true;
          }
      });
  }

}
