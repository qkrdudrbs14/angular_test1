import { Component } from '@angular/core';

import { productType } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {

  share() {
    console.log("share")
    window.alert('The product has been shared!')
  }

  products: productType[]  = [
    {id: 1,name:'product1', description:'description1', price: 500},
    {id: 2,name:'product2', description:'description2', price: 1400},
    {id: 3,name:'product3', description:'description3', price: 800}
  ]

  productList = [...this.products];

  onNotify() {
    window.alert('You will be notified when the product goes on sale')
  }
}
