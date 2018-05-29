import { Component, OnInit } from '@angular/core';
import { AdminProductService } from '../../service/admin-product/admin-product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {

  product;

  constructor(
    private adminProductService: AdminProductService,
    private activatedRoute: ActivatedRoute
  ) {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.adminProductService.getProduct(id)
      .subscribe(response => {
        console.log(response.json());
        this.product = response.json();
      });
  }

  ngOnInit() {
  }

}
