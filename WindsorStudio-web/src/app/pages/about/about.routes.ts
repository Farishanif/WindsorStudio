import { Routes } from '@angular/router';
import { AboutComponent } from './about.component';

export const ABOUT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./about.component').then(m => m.AboutComponent)
  }
];