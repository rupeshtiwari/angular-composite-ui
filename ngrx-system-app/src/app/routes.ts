import { Routes } from '@angular/router';
import { HomeContainerComponent } from './products/containers/home-container.component';

export const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  {
    path: 'homepage',
    component: HomeContainerComponent
  },
];
