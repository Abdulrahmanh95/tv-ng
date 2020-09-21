import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DigitalClinicComponent} from './components/digital-clinic/digital-clinic.component';
import {ExpertIntroComponent} from './components/expert-intro/expert-intro.component';
import {ClinicBookingComponent} from './components/clinic-booking/clinic-booking.component';
import {ClinicCoursesComponent} from './components/clinic-courses/clinic-courses.component';
import {ClinicBroadcastComponent} from './components/clinic-broadcast/clinic-broadcast.component';
import {ClinicStoreComponent} from './components/clinic-store/clinic-store.component';
import {ClinicCourseDetailsComponent} from './components/clinic-course-details/clinic-course-details.component';


const routes: Routes = [
  {
    path: ':id',
    component: DigitalClinicComponent,
    children: [
      {
        path: 'intro',
        component: ExpertIntroComponent
      },
      {
        path: 'store',
        component: ClinicStoreComponent
      },
      {
        path: 'broadcast',
        component: ClinicBroadcastComponent
      },
      {
        path: 'courses',
        children: [
          {
            path: ':id',
            component: ClinicCourseDetailsComponent
          },
          {
            path: '',
            component: ClinicCoursesComponent,
          }
        ]
      },
      {
        path: 'booking',
        component: ClinicBookingComponent
      },
      {
        path: '',
        redirectTo: 'intro',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'hind-nahed',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigitalClinicRoutingModule {
}
