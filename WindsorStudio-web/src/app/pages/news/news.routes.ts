import { Routes } from '@angular/router';
import { NewsComponent } from './news.component';
import { ArticleDetailsComponent } from './article-details/article-details.component'; 

export const NEWS_ROUTES: Routes = [
  {
    path: '',
    component: NewsComponent
  },
  {
    path: ':id', 
    // Loads the detail page for any specific article ID
    loadComponent: () => import('./article-details/article-details.component').then(m => m.ArticleDetailsComponent) 
  }
];