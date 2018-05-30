import { Component, OnInit } from '@angular/core';
import { AdminProductService } from '../../service/admin-product/admin-product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.scss']
})
export class AdminProductFormComponent implements OnInit {

  results;
  product = {};
  invalidProduct = false;
  productUpdated = false;
  productUpdateError = false;
  id;

  constructor(
    private router: Router,
    private adminProductService: AdminProductService,
    private activatedRoute: ActivatedRoute,
  ) {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      if(this.id){
        this.adminProductService.getProduct(this.id)
          .take(1)
          .subscribe(response => {
            let result = response.json();
            if(result._id && result.created){
              this.product = result;
            }
            else{
              this.invalidProduct = true;
            }
          });
      }

      adminProductService.getCategories()
        .subscribe(response => {
          this.results = response.json();
        })
  }
  
  ngOnInit() {
    
  }

  saveProduct(product){
    if(this.id){
      this.adminProductService.updateProduct(this.id, product)
        .subscribe(response => {
          let product = response.json();
          if(product.created){
            this.productUpdated = true;
          }
          if(product.ok === false){
            this.productUpdateError = true;
          }
        });
    }
    else{
      this.adminProductService.createProduct(product)
        .subscribe(response => {
          let result = response.json();
          if(result.created && result._id){
            this.router.navigate(['/admin/products']);
          }
          if(result.status === 504){
            this.invalidProduct = true;
          }
        });
     }
  }

  deleteProduct(product){
    if(confirm('Are you sure to delete this product?')){
      this.adminProductService.deleteProduct(this.id, this.product)
        .subscribe(response => {
          let result = response.json();
          if(result){
            this.router.navigate(['/admin/products']);
          }
          else{
            this.invalidProduct = true;
          }
        });
    }
  }

}
