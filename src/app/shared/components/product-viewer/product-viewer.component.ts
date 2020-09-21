import {Component, Input, OnInit} from '@angular/core';
import {ProductHeader} from '../../../features/digital-clinic/components/clinic-store/clinic-store.component';

@Component({
  selector: 'tv-product-viewer',
  templateUrl: './product-viewer.component.html',
  styleUrls: ['./product-viewer.component.scss']
})
export class ProductViewerComponent implements OnInit {

  @Input() product: ProductHeader;

  constructor() { }

  ngOnInit(): void {
  }

}
