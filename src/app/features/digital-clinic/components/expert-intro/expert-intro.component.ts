import {Component, OnInit} from '@angular/core';
import {fadeInUp400ms} from '../../../../shared/animations/fade-in-up.animation';
import {fadeInRight400ms} from '../../../../shared/animations/fade-in-right.animation';
import {fadeInLeft400ms} from '../../../../shared/animations/fade-in-left.animation';
import {fadeIn400ms, fadeIn600ms} from '../../../../shared/animations/fade-in.animation';

@Component({
  selector: 'tv-expert-intro',
  templateUrl: './expert-intro.component.html',
  styleUrls: ['./expert-intro.component.scss'],
  animations: [
    fadeInUp400ms,
    fadeInRight400ms,
    fadeInLeft400ms,
    fadeIn600ms
  ]
})
export class ExpertIntroComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
