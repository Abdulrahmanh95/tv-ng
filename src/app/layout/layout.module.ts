import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LandingComponent } from './landing.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [LandingComponent, HeaderComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
