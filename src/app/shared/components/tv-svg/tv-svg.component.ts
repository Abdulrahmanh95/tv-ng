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

  /**
   * Full object path
   */
  public svgStyle: {fill: string} = null;

  constructor() { }

  ngOnInit(): void {
    this.setSvgStyle();
  }

  /**
   * Set either gradient url or fill color
   * @private
   */
  private setSvgStyle(): void {
    if (this.gradient) {
      const gradientUrl = `${window.location.pathname}#${this.gradient}-linear-gradient`;
      this.svgStyle = {fill: `url(${gradientUrl})`};
    } else if (this.fill) {
      this.svgStyle = {fill: this.fill};
    }
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
