import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.routes').then(m => m.HOME_ROUTES)
  },

  {
    path: 'games',
    loadChildren: () => import('./pages/games/games.routes').then(m => m.GAMES_ROUTES)
  },

  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.routes').then(m => m.NEWS_ROUTES)
  },

  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.routes').then(m => m.ABOUT_ROUTES)
  },

  {
    path: '**',
    redirectTo: 'home'
  }
];