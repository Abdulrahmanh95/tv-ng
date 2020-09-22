import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tv-svg',
  templateUrl: './tv-svg.component.html',
  styleUrls: ['./tv-svg.component.scss']
})
export class TvSvgComponent implements OnInit {

  /**
   * Icon name in icons folder
   */
  @Input() icon: string;

  /**
   * Gradient types
   */
  @Input() gradient: 'primary' | 'secondary' | 'doc' | 'audio' | 'ellipse' | 'camera' | 'user' | 'user-active';

  /**
   * If not gradient
   */
  @Input() fill: string;

  /**
   * SVGs container sprite path
   */
  public spriteUrl = 'assets/icons/sprite.svg';

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Set either gradient url or fill color
   * @private
   */
  svgStyle(): {fill: string} {
    let svgStyleObject: {fill: string} = null;

    if (this.gradient) {
      const gradientUrl = `${window.location.pathname}#${this.gradient}-linear-gradient`;
      svgStyleObject = {fill: `url(${gradientUrl})`};
    } else if (this.fill) {
      svgStyleObject = {fill: this.fill};
    }
    return svgStyleObject;
  }

  get iconPrefixed(): string {
    return `icon-${this.icon}`;
  }

  /**
   * Full url of icon
   */
  get fullUrl(): string {
    return `${this.spriteUrl}#${this.iconPrefixed}`;
  }
}
