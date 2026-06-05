import { Injectable } from '@angular/core';
import { Game } from './game.model';
import { Observable, of } from 'rxjs';

// Mock Data Source
const MOCK_GAMES: Game[] = [
  { 
    id: 1, 
    title: 'Reachable', 
    tagline: `A visual novel game with multiple endings. An exploration of how ambition reshapes love.`, 
    releaseDate: new Date('2026-11-10'), 
    genres: ['Visual Novel','Romance','Sci-fi'], 
    platforms: ['PC'], 
    rating: 4.8, 
    imagePath: '/assets/GG_reachable.png' 
  },
  { 
    id: 2, 
    title: 'Infecticore', 
    tagline: `A covert survival RPG where a captured task force must escape a secret island facility 
    and expose a conspiracy before it unleashes a global catastrophe.`, 
    releaseDate: new Date('2026-07-15'), 
    genres: ['Survival', 'Horror', 'Action'], 
    platforms: [ 'Android', 'IOS'], 
    rating: 4.2, 
    imagePath: '/assets/GG_infecticore.png' 
  },
  { 
    id: 3, 
    title: 'Cloud Moon', 
    tagline: `A 2D side-scroller that dwells into the darker reality of the life of a schizophrenic girl.`, 
    releaseDate: new Date('2026-06-10'), 
    genres: ['Side-Scrolling', 'Adventure','Psychological'], 
    platforms: ['PC'], 
    rating: 4.6, 
    imagePath: '/assets/GG_cloudmoon.png' },
    { 
    id: 4, 
    title: 'Hearts', 
    tagline: `A fast-paced, turn-based card battler where the players can chain powerful effects,
     stack devastating combos, and outplay their opponents in an intense battle with various game modes.`, 
    releaseDate: new Date('2026-05-10'), 
    genres: ['Card-Game', ' Deck-Building'], 
    platforms: ['PC', 'Android', 'IOS'], 
    rating: 4.6, 
    imagePath: '/assets/GG_hearts.png' },
];

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  getAllGames(): Observable<Game[]> {
    return of(MOCK_GAMES); 
  }
  
  getGameById(id: number): Observable<Game | undefined> {
    const game = MOCK_GAMES.find(g => g.id === id);
    return of(game);
  }
}
// backend connection example
// export class GamesService {

//   private apiUrl = 'http://localhost:5202/api/games'; // your ASP.NET Core endpoint

//   constructor(private http: HttpClient) {}

//   getGames(): Observable<Game[]> {
//     return this.http.get<Game[]>(this.apiUrl);
//   }
// }
