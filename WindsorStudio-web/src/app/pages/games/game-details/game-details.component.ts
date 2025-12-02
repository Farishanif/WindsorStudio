// src/app/pages/games/game-detail/game-detail.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module'; // Adjust path
import { GamesService } from '../../../services/games/games.service'; // Adjust path
import { Game } from '../../../services/games/game.model'; // Adjust path

@Component({
  selector: 'app-game-detail',
  standalone: true, // <-- Must be Standalone!
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
  imports: [CommonModule, SharedModule] // Provide shared dependencies
})
export class GameDetailsComponent implements OnInit {
  game: Game | undefined;
  
  // Inject ActivatedRoute to read URL parameters and GamesService to fetch data
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