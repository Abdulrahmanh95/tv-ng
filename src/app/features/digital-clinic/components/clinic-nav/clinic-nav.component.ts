import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

class ClinicNavItem {
  label: string;
  route: string;
}

@Component({
  selector: 'tv-clinic-nav',
  templateUrl: './clinic-nav.component.html',
  styleUrls: ['./clinic-nav.component.scss']
})
export class ClinicNavComponent implements OnInit {

  /**
   * Navigation items
   */
  public items: Array<ClinicNavItem> = [
    {
      route: 'intro',
      label: 'نبذه عن هند'
    },
    {
      route: 'store',
      label: 'متجر'
    },
    {
      route: 'broadcast',
      label: 'برودكاست'
    },
    {
      route: 'courses',
      label: 'كورسات'
    },
    {
      route: 'booking',
      label: 'حجز عيادة (20 دينار كويتي)'
    },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isCourseDetailsPage(): boolean {
    const expression = new RegExp(/courses\/[0-9]+/gi);
    return !!this.router.url.match(expression);
  }
}
