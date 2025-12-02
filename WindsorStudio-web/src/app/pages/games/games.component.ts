import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games/games.service';
import { Game } from '../../services/games/game.model';
import { SharedModule } from '../../shared/shared.module'; // Adjust path if needed
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  imports: [
    CommonModule, // Needed for *ngIf, *ngFor
    SharedModule  // Provides the Navbar and Footer components
  ]
})
export class GamesComponent implements OnInit {
  games: Game[] = [];
  filteredGames: Game[] = [];
  // For filtering later:
  selectedGenre: string = '';
  availableGenres: string[] = ['All', 'RPG', 'Horror', 'Survival', 'Action', 'Sci-Fi', 'Platformer'];
  
  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.gamesService.getAllGames().subscribe(data => {
      this.games = data;
      this.filteredGames = data; // Initialize filtered list with all games
    });
  }

  // Simple filter function
  filterByGenre(genre: string): void {
    this.selectedGenre = genre;
    if (genre === 'All' || !genre) {
      this.filteredGames = this.games;
    } else {
      this.filteredGames = this.games.filter(game => game.genres.includes(genre));
    }
  }
}

// export class GamesComponent {

//   // signal that will hold the array of games
//   games!: Signal<Game[]>;

//   // UI state (simple booleans)
//   loading = true;
//   error = false;

//   constructor(private gamesService: GamesService) {
//     // Initialize the signal from the service observable
//     this.games = toSignal(this.gamesService.getGames(), { initialValue: [] });

//     // When the signal updates, update loading / error booleans.
//     effect(() => {
//       const arr = this.games();
//       // when the observable emits an array (even empty), we clear the loading flag
//       // decide "no-data" vs "data" downstream in template
//       this.loading = false;
//       // clear error (if you want more advanced error detection, use catchError in service)
//       this.error = false;
//     });
//   }

//   trackById(_index: number, game: Game) {
//     return game.id;
//   }
// }
