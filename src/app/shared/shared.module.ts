import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {RatingComponent} from './components/rating/rating.component';
import {TextScrollableBoxComponent} from './components/text-scrollable-box/text-scrollable-box.component';
import {PlyrModule} from 'ngx-plyr';
import {VideoPlayerComponent} from './components/video-player/video-player.component';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {ProductViewerComponent} from './components/product-viewer/product-viewer.component';
import {CourseItemComponent} from './components/course-item/course-item.component';
import {TruncatePipe} from './pipes/truncate.pipe';
import {ExpertInfoComponent} from './components/expert-info/expert-info.component';
import {TvSvgComponent} from './components/tv-svg/tv-svg.component';


@NgModule({
  declarations: [PageNotFoundComponent,
    RatingComponent,
    TextScrollableBoxComponent,
    VideoPlayerComponent,
    ProductCardComponent,
    ProductViewerComponent,
    CourseItemComponent,
    TruncatePipe,
    ExpertInfoComponent,
    TvSvgComponent
  ],
  imports: [
    CommonModule,
    PlyrModule,
  ],
  exports: [
    PageNotFoundComponent,
    RatingComponent,
    TextScrollableBoxComponent,
    VideoPlayerComponent,
    ProductCardComponent,
    ProductViewerComponent,
    CourseItemComponent,
    TruncatePipe,
    ExpertInfoComponent,
    TvSvgComponent
  ]
})
export class SharedModule {
}
