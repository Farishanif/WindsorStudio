import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const HOME_ROUTES: Routes = [
  {
    // When the path is just /home
    path: '',
    // Use loadComponent to lazy load the component class
    loadComponent: () => import('./home.component').then(m => m.HomeComponent)
  }
];