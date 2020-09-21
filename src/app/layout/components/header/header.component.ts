import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'tv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() waitListOpened = false;

  @Output() sideNavOpen$: EventEmitter<void> = new EventEmitter<void>();

  @Output() waitListClick$: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  emitClick(): void {
    this.waitListOpened = !this.waitListOpened;
    this.waitListClick$.emit();
  }

  toggleSideNav(): void {
    this.sideNavOpen$.emit();
  }

}
