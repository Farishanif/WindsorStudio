// src/app/pages/games/games.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { effect, Signal } from '@angular/core';
import { GamesService, Game } from '../../services/games/games';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {

  // signal that will hold the array of games
  games!: Signal<Game[]>;

  // UI state (simple booleans)
  loading = true;
  error = false;

  constructor(private gamesService: GamesService) {
    // Initialize the signal from the service observable
    this.games = toSignal(this.gamesService.getGames(), { initialValue: [] });

    // When the signal updates, update loading / error booleans.
    effect(() => {
      const arr = this.games();
      // when the observable emits an array (even empty), we clear the loading flag
      // decide "no-data" vs "data" downstream in template
      this.loading = false;
      // clear error (if you want more advanced error detection, use catchError in service)
      this.error = false;
    });
  }

  trackById(_index: number, game: Game) {
    return game.id;
  }
}
