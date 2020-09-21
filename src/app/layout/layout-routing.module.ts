import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as SLUGS from '../config/slugs';
import {LandingComponent} from './landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: SLUGS.DIGITAL_CLINIC,
        loadChildren: () => import('../features/digital-clinic/digital-clinic.module').then(m => m.DigitalClinicModule),
      },
      {
        path: '',
        redirectTo: SLUGS.DIGITAL_CLINIC,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
