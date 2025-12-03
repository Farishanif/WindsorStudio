import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
  // 1. Home Page
    path: 'home',
    loadChildren: () => import('./pages/home/home.routes').then(m => m.HOME_ROUTES)
  },

  // 2. Games Feature
  {
    path: 'games',
    loadChildren: () => import('./pages/games/games.routes').then(m => m.GAMES_ROUTES)
  },

  // 3. News Feature
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.routes').then(m => m.NEWS_ROUTES)
  },
  
  // 4. About Us Page
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.routes').then(m => m.ABOUT_ROUTES)
  },

  // 5. Catch-all for 404
  {
    path: '**',
    redirectTo: 'home'
  }
];