import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module'; 
import { GamesService } from '../../../services/games/games.service'; 
import { Game } from '../../../services/games/game.model'; 

@Component({
  selector: 'app-game-detail',
  standalone: true, // <-- Must be Standalone!
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
  imports: [CommonModule, SharedModule]
})
export class GameDetailsComponent implements OnInit {
  game: Game | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService
  ) { }

  ngOnInit(): void {
    // 1. Subscribe to the 'id' parameter in the URL
    this.route.paramMap.subscribe(params => {
      // 2. Get the id (which is a string), convert to a number
      const gameId = Number(params.get('id')); 

      if (gameId) {
        // 3. Use the service to fetch the data
        this.gamesService.getGameById(gameId).subscribe(data => {
          this.game = data;
        });
      }
    });
  }
}