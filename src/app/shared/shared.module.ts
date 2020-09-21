import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {RatingComponent} from './components/rating/rating.component';
import {TextScrollableBoxComponent} from './components/text-scrollable-box/text-scrollable-box.component';
import {PlyrModule} from 'ngx-plyr';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductViewerComponent } from './components/product-viewer/product-viewer.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import {TruncatePipe} from './pipes/truncate.pipe';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ExpertInfoComponent } from './components/expert-info/expert-info.component';


@NgModule({
  declarations: [PageNotFoundComponent,
    RatingComponent,
    TextScrollableBoxComponent,
    VideoPlayerComponent,
    ProductCardComponent,
    ProductViewerComponent,
    CourseItemComponent,
    TruncatePipe,
    ExpertInfoComponent
  ],
  imports: [
    CommonModule,
    PlyrModule,
    MatTooltipModule
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
    ExpertInfoComponent
  ]
})
export class SharedModule {
}
