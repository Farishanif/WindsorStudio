// src/app/services/news/article.model.ts

export interface Article {
  id: number;
  title: string;
  summary: string;
  author: string;
  date: Date;
  category: 'Update' | 'Release' | 'Community' | 'DevBlog';
  imagePath: string; // Used for the thumbnail
  contentPath: string; // Placeholder for the full article content
}