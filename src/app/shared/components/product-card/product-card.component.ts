import {Component, Input, OnInit} from '@angular/core';
import {ProductHeader} from '../../../features/digital-clinic/components/clinic-store/clinic-store.component';

@Component({
  selector: 'tv-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: ProductHeader;

  constructor() { }

  ngOnInit(): void {
  }

}
