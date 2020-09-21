import { Component, OnInit } from '@angular/core';
import {fadeInUp400ms} from '../../../../shared/animations/fade-in-up.animation';

@Component({
  selector: 'tv-clinic-courses',
  templateUrl: './clinic-courses.component.html',
  styleUrls: ['./clinic-courses.component.scss'],
  animations: [
    fadeInUp400ms
  ]
})
export class ClinicCoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
