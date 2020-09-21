import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tv-text-scrollable-box',
  templateUrl: './text-scrollable-box.component.html',
  styleUrls: ['./text-scrollable-box.component.scss']
})
export class TextScrollableBoxComponent implements OnInit {

  @Input() scrollable = true;

  constructor() { }

  ngOnInit(): void {
  }

}
