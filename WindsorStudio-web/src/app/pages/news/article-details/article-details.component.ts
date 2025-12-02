// src/app/pages/news/article-detail/article-detail.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module'; 
import { NewsService } from '../../../services/news/news.service'; 
import { Article } from '../../../services/news/article.model'; 

@Component({
  selector: 'app-article-detail',
  standalone: true, // <-- Standalone!
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
  imports: [CommonModule, SharedModule] 
})
export class ArticleDetailsComponent implements OnInit {
  article: Article | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    // 1. Subscribe to the 'id' parameter in the URL (defined in the routes file)
    this.route.paramMap.subscribe(params => {
      const articleId = Number(params.get('id')); 

      if (articleId) {
        // 2. Use the service to fetch the data
        this.newsService.getArticleById(articleId).subscribe(data => {
          this.article = data;
        });
      }
    });
  }
}