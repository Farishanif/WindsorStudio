import { Routes } from '@angular/router';
import { AboutComponent } from './about.component';

export const ABOUT_ROUTES: Routes = [
  {
    // When the path is just /About
    path: '',
    // Use loadComponent to lazy load the component class
    loadComponent: () => import('./about.component').then(m => m.AboutComponent)
  }
];