import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { GamesService } from '../../services/games/games.service';
import { NewsService } from '../../services/news/news.service';
import { Game } from '../../services/games/game.model';
import { Article } from '../../services/news/article.model';
import { Member } from '../../services/about/member.model';
import { AboutService } from '../../services/about/about.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [SharedModule]
})
export class HomeComponent implements OnInit {
  latestGames: Game[] = [];
  latestNews: Article[] = [];
  coreTeamMembers: Member[] = [];
  newTeamRoleGroups: { label: string; members: Member[] }[] = [];

  constructor(
    private gamesService: GamesService,
    private aboutService: AboutService,
    private newsService: NewsService
  ) { }




  ngOnInit(): void {
    // 1. Fetch 3 newest games
    this.gamesService.getAllGames().subscribe(games => {
      // Sort games by release date descending and take the first 3
      this.latestGames = games
        .sort((a, b) => {
          const dateA = a.releaseDate ? new Date(a.releaseDate).getTime() : Infinity;
          const dateB = b.releaseDate ? new Date(b.releaseDate).getTime() : Infinity;
          return dateB - dateA;
        })
        .slice(0, 3);
    });


    this.aboutService.getAllMembers().subscribe(data => {
      this.coreTeamMembers = data.filter(member => member.team === 'core');
      const newTeamMembers = data.filter(member => member.team === 'new');
      const hasRole = (member: Member, role: string) => member.job.includes(role);
      const hasBothCreativeRoles = (member: Member) =>
        hasRole(member, 'Writer') && hasRole(member, 'Artist');

      this.newTeamRoleGroups = [
        {
          label: 'Programmers',
          members: newTeamMembers.filter(member => hasRole(member, 'Programmer'))
        },
        {
          label: 'Writers',
          members: newTeamMembers.filter(
            member => hasRole(member, 'Writer') && !hasBothCreativeRoles(member)
          )
        },
        {
          label: 'Writers & Artists',
          members: newTeamMembers.filter(hasBothCreativeRoles)
        },
        {
          label: 'Artists',
          members: newTeamMembers.filter(
            member => hasRole(member, 'Artist') && !hasBothCreativeRoles(member)
          )
        },
        {
          label: 'Sound',
          members: newTeamMembers.filter(member => hasRole(member, 'Sound'))
        }
      ];
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
