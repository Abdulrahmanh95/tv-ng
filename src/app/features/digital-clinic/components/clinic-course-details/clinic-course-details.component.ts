import { Component, OnInit } from '@angular/core';
import {ProductHeader} from '../clinic-store/clinic-store.component';
import {fadeInUp400ms} from '../../../../shared/animations/fade-in-up.animation';

@Component({
  selector: 'tv-clinic-course-details',
  templateUrl: './clinic-course-details.component.html',
  styleUrls: ['./clinic-course-details.component.scss'],
  animations: [
    fadeInUp400ms
  ]
})
export class ClinicCourseDetailsComponent implements OnInit {

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
  ];

  public course1Products: Array<ProductHeader> = [
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

  public course2Products: Array<ProductHeader> = [
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
  ];

  /**
   * Currently displayed
   */
  activeProduct: ProductHeader = this.products[0];

  constructor() { }

  ngOnInit(): void {
  }

}
