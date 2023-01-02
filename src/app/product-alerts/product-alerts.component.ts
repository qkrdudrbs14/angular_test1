import { Component, EventEmitter, Input, Output } from '@angular/core';

import { productType } from '../product-list/product-list.service';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {

  @Input() product!:productType;
  @Output() notify = new EventEmitter();

}
