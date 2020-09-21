import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {PlyrComponent} from 'ngx-plyr';
import * as Plyr from 'plyr';

@Component({
  selector: 'tv-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  @Input() heading = 'المقدمة التعريفية<br/>لـ هند الناهض';

  // get the component instance to have access to plyr instance
  @ViewChild(PlyrComponent)

  plyr: PlyrComponent;

  // or get it from plyrInit event
  player: Plyr;

  videoSources: Plyr.Source[] = [
    {
      src: 'assets/videos/hind-nahed-intro.mp4',
      type: 'video/mp4',
      size: 720
    },
  ];

  options: Plyr.Options = {
    loadSprite: false,
    iconUrl: 'assets/icons/player/sprite.svg',
    iconPrefix: 'icon',
    controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'airplay', 'fullscreen'],
  };

  constructor() { }

  ngOnInit(): void {
  }
}
