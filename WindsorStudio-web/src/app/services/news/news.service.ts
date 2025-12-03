import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { Observable, of } from 'rxjs';

const MOCK_ARTICLES: Article[] = [
  { 
    id: 1, 
    title: 'WINDSOR: The Creation of the website for studio windsor', 
    summary: 'As a way to extend our reach and making comitment on progresing to our future gaming studio, we start by creating this website.', 
    author: 'DevTeam', 
    date: new Date('2025-11-20'), 
    category: 'DevBlog', imagePath: '/assets/comingsoon.jpg', 
    contentPath: 'content/journey-start.html' 
  },
  { 
    id: 2, 
    title: 'The History of windsor studio', 
    summary: 'We sit down reading, observing, and discussing there so much beatifull world that can be created in a mind of an individual.', 
    author: 'Marketing Team', 
    date: new Date('2025-11-15'), 
    category: 'Update', 
    imagePath: '/assets/comingsoon.jpg', 
    contentPath: 'content/windsor-history.html' 
  },
  { 
    id: 3, 
    title: 'Is there any accomplishment that this studio has been made?', 
    summary: 'After the long periode creation of the studio what are their plan for the future?', 
    author: 'Community Manager', 
    date: new Date('2025-11-10'), 
    category: 'Community', 
    imagePath: '/assets/comingsoon.jpg', 
    contentPath: 'content/studio-accomplishment.html' 
  },
];

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  getAllArticles(): Observable<Article[]> {
    // Sort by date descending
    MOCK_ARTICLES.sort((a, b) => b.date.getTime() - a.date.getTime());
    return of(MOCK_ARTICLES); 
  }

  getArticleById(id: number): Observable<Article | undefined> {
    const article = MOCK_ARTICLES.find(a => a.id === id);
    return of(article);
  }
}