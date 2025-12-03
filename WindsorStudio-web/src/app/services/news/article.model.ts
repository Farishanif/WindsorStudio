export interface Article {
  id: number;
  title: string;
  summary: string;
  author: string;
  date: Date;
  category: 'Update' | 'Release' | 'Community' | 'DevBlog';
  imagePath: string; // Placeholder for the thumbnail
  contentPath: string; // Placeholder for the full article content
}