import { Component, OnInit } from '@angular/core';
import { AdminProductService } from '../../service/admin-product/admin-product.service';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.scss']
})
export class AdminProductFormComponent implements OnInit {

  results;

  constructor(private adminProductService: AdminProductService) {
    adminProductService.getCategories()
      .subscribe(response => {
        this.results = response.json();
      })
  }
  
  ngOnInit() {
    
  }

  saveProduct(product){
    console.log(product);
    this.adminProductService.createProduct(product)
      .subscribe(response => {
        console.log(response.json());
      });
  }


}
