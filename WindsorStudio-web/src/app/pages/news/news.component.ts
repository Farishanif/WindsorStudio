// src/app/pages/news/news.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module'; 
import { NewsService } from '../../services/news/news.service';
import { Article } from '../../services/news/article.model'; 

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  imports: [CommonModule, SharedModule] 
})
export class NewsComponent implements OnInit {
  articles: Article[] = [];
  
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getAllArticles().subscribe(data => {
      this.articles = data;
    });
  }

  getCategoryClass(category: string): string {
    // Helper function to apply specific styling based on category
    return `category-${category.toLowerCase().replace(/ /g, '-')}`;
  }
}