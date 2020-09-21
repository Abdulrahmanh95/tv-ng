import { Component, OnInit } from '@angular/core';
import {ProductHeader} from '../clinic-store/clinic-store.component';
import {fadeInLeft400ms} from '../../../../shared/animations/fade-in-left.animation';
import {fadeInRight400ms} from '../../../../shared/animations/fade-in-right.animation';

@Component({
  selector: 'tv-clinic-broadcast',
  templateUrl: './clinic-broadcast.component.html',
  styleUrls: ['./clinic-broadcast.component.scss'],
  animations: [
    fadeInLeft400ms,
    fadeInRight400ms
  ]
})
export class ClinicBroadcastComponent implements OnInit {

  /**
   * Expert products
   */
  public products: Array<ProductHeader> = [
    Object.assign(new ProductHeader(), {
      thumbnail: 'assets/imgs/hind-nahed-content-creation@2x.jpg',
      heading: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال',
      price: 299,
      currency: 'دينار كويتي',
      downloadCount: 104,
      type: 'video'
    }),
    Object.assign(new ProductHeader(), {
      thumbnail: 'assets/imgs/hind-nahed-cc@2x.jpg',
      heading: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال',
      price: 149,
      currency: 'دينار كويتي',
      downloadCount: 39,
      type: 'video'
    }),
    Object.assign(new ProductHeader(), {
      thumbnail: 'assets/imgs/hind-nahed-course@2x.jpg',
      heading: 'دورة صناعة المحتوى مع هند الناهض',
      price: 550,
      currency: 'دينار كويتي',
      downloadCount: 12,
      type: 'video'
    }),
    Object.assign(new ProductHeader(), {
      thumbnail: 'assets/imgs/hind-nahed-content-creation@2x.jpg',
      heading: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال',
      price: 299,
      currency: 'دينار كويتي',
      downloadCount: 104,
      type: 'video'
    }),
    Object.assign(new ProductHeader(), {
      thumbnail: 'assets/imgs/hind-nahed-course@2x.jpg',
      heading: 'دورة صناعة المحتوى مع هند الناهض',
      price: 550,
      currency: 'دينار كويتي',
      downloadCount: 12,
      type: 'video'
    }),
    Object.assign(new ProductHeader(), {
      thumbnail: 'assets/imgs/hind-nahed-cc@2x.jpg',
      heading: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال',
      price: 149,
      currency: 'دينار كويتي',
      downloadCount: 39,
      type: 'video'
    }),
    Object.assign(new ProductHeader(), {
      thumbnail: 'assets/imgs/hind-nahed-course@2x.jpg',
      heading: 'دورة صناعة المحتوى مع هند الناهض',
      price: 550,
      currency: 'دينار كويتي',
      downloadCount: 12,
      type: 'video'
    }),
    Object.assign(new ProductHeader(), {
      thumbnail: 'assets/imgs/hind-nahed-cc@2x.jpg',
      heading: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال',
      price: 149,
      currency: 'دينار كويتي',
      downloadCount: 39,
      type: 'video'
    }),
    Object.assign(new ProductHeader(), {
      thumbnail: 'assets/imgs/hind-nahed-content-creation@2x.jpg',
      heading: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال',
      price: 299,
      currency: 'دينار كويتي',
      downloadCount: 104,
      type: 'video'
    }),
  ];

  /**
   * Currently displayed
   */
  activeProduct: ProductHeader = this.products[0];

  constructor() { }

  ngOnInit(): void {
  }

}
