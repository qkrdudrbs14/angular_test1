import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productType } from '../product-list/product-list.service';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: productType | undefined;

  constructor(private route: ActivatedRoute,
      private productListCom: ProductListComponent
    ) {
  }

  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap

    const productIdFromRoute = Number(routeParams.get('productId'))

    this.product = this.productListCom.products.find(product => product.id === productIdFromRoute)
  }
}
