import { Component, OnInit } from '@angular/core';
import {fadeInUp400ms} from '../../../../shared/animations/fade-in-up.animation';

@Component({
  selector: 'tv-clinic-booking',
  templateUrl: './clinic-booking.component.html',
  styleUrls: ['./clinic-booking.component.scss'],
  animations: [
    fadeInUp400ms
  ]
})
export class ClinicBookingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
