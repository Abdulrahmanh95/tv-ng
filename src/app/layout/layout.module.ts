import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutRoutingModule} from './layout-routing.module';
import {LandingComponent} from './landing.component';
import {HeaderComponent} from './components/header/header.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [LandingComponent, HeaderComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule {
}
