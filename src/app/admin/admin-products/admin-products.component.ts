import { Component, OnInit } from '@angular/core';
import { AdminProductService } from '../../service/admin-product/admin-product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  products;

  constructor(private adminProductService: AdminProductService) {     
    this.adminProductService.getProducts()
      .subscribe(response => {
        console.log(response.json());
        this.products = response.json();
      });
  }

  ngOnInit() {
    
  }
}
