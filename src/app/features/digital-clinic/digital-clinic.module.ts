import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DigitalClinicRoutingModule} from './digital-clinic-routing.module';
import {DigitalClinicComponent} from './components/digital-clinic/digital-clinic.component';
import {ClinicHeaderComponent} from './components/clinic-header/clinic-header.component';
import {StatsSectionComponent} from './components/stats-section/stats-section.component';
import {SharedModule} from '../../shared/shared.module';
import {ClinicNavComponent} from './components/clinic-nav/clinic-nav.component';
import {ExpertIntroComponent} from './components/expert-intro/expert-intro.component';
import { ClinicStoreComponent } from './components/clinic-store/clinic-store.component';
import { ClinicBroadcastComponent } from './components/clinic-broadcast/clinic-broadcast.component';
import { ClinicCoursesComponent } from './components/clinic-courses/clinic-courses.component';
import { ClinicBookingComponent } from './components/clinic-booking/clinic-booking.component';
import { ClinicCourseDetailsComponent } from './components/clinic-course-details/clinic-course-details.component';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [DigitalClinicComponent,
    ClinicHeaderComponent,
    StatsSectionComponent,
    ClinicNavComponent,
    ExpertIntroComponent,
    ClinicStoreComponent,
    ClinicBroadcastComponent,
    ClinicCoursesComponent,
    ClinicBookingComponent,
    ClinicCourseDetailsComponent,],
    imports: [
        CommonModule,
        DigitalClinicRoutingModule,
        SharedModule,
        MatTooltipModule,
    ]
})
export class DigitalClinicModule {
}
