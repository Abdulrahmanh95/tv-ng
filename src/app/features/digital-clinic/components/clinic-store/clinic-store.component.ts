import { Component, OnInit } from '@angular/core';
import {fadeInUp400ms} from '../../../../shared/animations/fade-in-up.animation';
import {fadeInLeft400ms} from '../../../../shared/animations/fade-in-left.animation';
import {fadeInRight400ms} from '../../../../shared/animations/fade-in-right.animation';

export class ProductHeader {
  thumbnail: string;
  heading: string;
  price: number;
  currency: string;
  downloadCount: number;
  type: 'video' | 'audio' | 'word' | 'pdf';

  isVideo(): boolean {
    return this.type === 'video';
  }
}

@Component({
  selector: 'tv-clinic-store',
  templateUrl: './clinic-store.component.html',
  styleUrls: ['./clinic-store.component.scss'],
  animations: [
    fadeInLeft400ms,
    fadeInRight400ms
  ]
})
export class ClinicStoreComponent implements OnInit {

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
      thumbnail: 'assets/imgs/hind-nahed-course@2x.jpg',
      heading: 'دورة صناعة المحتوى مع هند الناهض',
      price: 300,
      currency: 'دينار كويتي',
      downloadCount: 120,
      type: 'pdf'
    }),
    Object.assign(new ProductHeader(), {
      thumbnail: 'assets/imgs/hind-nahed-course@2x.jpg',
      heading: 'فوكس حلقة 5',
      price: 150,
      currency: 'دينار كويتي',
      downloadCount: 100,
      type: 'word'
    }),
    Object.assign(new ProductHeader(), {
      thumbnail: 'assets/imgs/hind-nahed-course@2x.jpg',
      heading: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال',
      price: 550,
      currency: 'دينار كويتي',
      downloadCount: 12,
      type: 'audio'
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
