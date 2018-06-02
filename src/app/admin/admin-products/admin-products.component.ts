import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminProductService } from '../../service/admin-product/admin-product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  
  // Observables
  products: {title: string}[];
  subscription: Subscription;
  filteredProducts: any[];

  constructor(private adminProductService: AdminProductService) {     
    this.adminProductService.getProducts()
      .subscribe(response => {
        this.filteredProducts = this.subscription = this.products = response.json();
      });
  }

  // Product Search Filter
  filter(query: string){
    this.filteredProducts = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : 
      this.products;
  }

  // Unsubscribe
  ngOnDestroy(){
    this.subscription
      .unsubscribe;
  }

  ngOnInit() {
    
  }
}
