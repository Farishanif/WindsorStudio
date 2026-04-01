import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { Observable, of } from 'rxjs';

const MOCK_ARTICLES: Article[] = [
  { 
    id: 1, 
    title: 'WINDSOR: The Creation of the Game Studio Windsor', 
    summary: `Hi! Keeper Bee Here, I'm very excited to be able to assemble a new team for game development. 
              I will be your lead developer and project lead! So, I am here to help!.`, 
    author: 'DevTeam', 
    date: new Date('2025-11-20'), 
    category: 'DevBlog', imagePath: '/assets/comingsoon.jpg', 
    contentPath: 'content/journey-start.html' 
  },
  { 
    id: 2, 
    title: 'About Us! Windsor Studio', 
    summary: `We (will include you!) are passionate game developers, programmers, and artists which are working together to create our thoughts and ideas into entertaining and absolutely fun gameplay experiences!`, 
    author: 'Marketing Team', 
    date: new Date('2025-11-15'), 
    category: 'Update', 
    imagePath: '/assets/comingsoon.jpg', 
    contentPath: 'content/windsor-history.html' 
  },
  { 
    id: 3, 
    title: 'What Lies Ahead?', 
    summary: 'After the long planning and preparation, what does the future hold for Windsor Studio?', 
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