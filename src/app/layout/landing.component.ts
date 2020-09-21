import {Component, HostListener, OnInit, Renderer2} from '@angular/core';

class User {
  name: string;
  since: string;
  active?: boolean;
}

@Component({
  selector: 'tv-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  waitListOpened = false;
  sideNavOpened = false;

  users: Array<User> = [
    {
      name: 'مستخدم 1',
      since: 'منذ ١٥ دقيقة'
    },
    {
      name: 'مستخدم 2',
      since: 'منذ ١٢ دقيقة'
    },
    {
      name: 'مستخدم 3',
      since: 'منذ ١١ دقيقة'
    },
    {
      name: 'مالك محمد',
      since: 'منذ ١٠ دقيقة',
      active: true
    },
    {
      name: 'مستخدم 4',
      since: 'منذ ٨ دقيقة'
    },
    {
      name: 'مستخدم 5',
      since: 'منذ ٥ دقيقة'
    },
    {
      name: 'مستخدم 6',
      since: 'منذ ٢ دقيقة'
    },
  ];

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  toggleListOpened() {
    this.waitListOpened = !this.waitListOpened;
    if (this.waitListOpened) {
      this.renderer.addClass(document.documentElement, 'opened');
    } else {
      this.renderer.removeClass(document.documentElement, 'opened');
    }
  }

  toggleSideNav(): void {
    this.sideNavOpened = !this.sideNavOpened;
  }



}
