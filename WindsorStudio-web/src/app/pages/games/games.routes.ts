import { Routes } from '@angular/router';
import { GamesComponent } from './games.component';
import { GameDetailsComponent } from './game-details/game-details.component'; 

export const GAMES_ROUTES: Routes = [
  {
    path: '',
    component: GamesComponent // Loads the main gallery component
  },
  {
    path: ':id', 
    // Load the GameDetailComponent (which must also be Standalone)
    loadComponent: () => import('./game-details/game-details.component').then(m => m.GameDetailsComponent) 
  }
];