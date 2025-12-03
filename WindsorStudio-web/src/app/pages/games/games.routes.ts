import { Routes } from '@angular/router';
import { GamesComponent } from './games.component';
import { GameDetailsComponent } from './game-details/game-details.component'; 

export const GAMES_ROUTES: Routes = [
  {
    path: '',
    component: GamesComponent
  },
  {
    path: ':id', 
    // Load the GameDetailComponent
    loadComponent: () => import('./game-details/game-details.component').then(m => m.GameDetailsComponent) 
  }
];