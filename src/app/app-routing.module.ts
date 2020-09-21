import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import * as SLUGS from './config/slugs';
import {PageNotFoundComponent} from './shared/components/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: SLUGS.PAGE_NOT_FOUND,
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: SLUGS.PAGE_NOT_FOUND
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
