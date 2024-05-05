import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { Product } from '../products/product.mock';
import { productList } from '../products/product.mock';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  constructor(private _route: ActivatedRoute) {}
  
  product?: Product;

  loading = true;

  ngOnInit(): void {
    
    setTimeout(() => {
      this._route.params.subscribe(params => {
        this.product = productList.find(p => p.id == params['productId']);
      })

      this.loading = false;
    }, 1500);
  }


}
