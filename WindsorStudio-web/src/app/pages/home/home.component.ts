import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { GamesService } from '../../services/games/games.service';
import { NewsService } from '../../services/news/news.service';
import { Game } from '../../services/games/game.model';
import { Article } from '../../services/news/article.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [SharedModule] 
})
export class HomeComponent implements OnInit {
  latestGames: Game[] = [];
  latestNews: Article[] = [];

  constructor(
    private gamesService: GamesService,
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    // 1. Fetch 3 newest games
    this.gamesService.getAllGames().subscribe(games => {
      // Sort games by release date descending and take the first 3
      this.latestGames = games
        .sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())
        .slice(0, 3);
    });

    // 2. Fetch 3 newest news articles
    this.newsService.getAllArticles().subscribe(articles => {
      // Sort articles by date descending and take the first 3
      this.latestNews = articles
        .sort((a, b) => b.date.getTime() - a.date.getTime())
        .slice(0, 3);
    });

  }
}
