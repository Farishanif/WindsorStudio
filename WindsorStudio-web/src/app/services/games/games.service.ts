import { Injectable } from '@angular/core';
import { Game } from './game.model';
import { Observable, of } from 'rxjs';

// Mock Data Source
const MOCK_GAMES: Game[] = [
  { 
    id: 1, 
    title: 'Reachable', 
    tagline: 'A journey about love and passion a pair of younglings', 
    releaseDate: new Date('2025-10-20'), 
    genres: ['RPG', 'Fantasy'], 
    platforms: ['PC', 'Android', 'IOS'], 
    rating: 4.8, 
    imagePath: '/assets/comingsoon.jpg' 
  },
  { 
    id: 2, 
    title: 'The Last Breach', 
    tagline: 'Survival zombie game in a post-apocalyptic world.', 
    releaseDate: new Date('2026-05-15'), 
    genres: ['Survival', 'Horror'], 
    platforms: [ 'Android', 'IOS'], 
    rating: 4.2, 
    imagePath: '/assets/comingsoon.jpg' 
  },
  { 
    id: 
    3, 
    title: 'Project Nova', 
    tagline: 'Fast-paced cybernetic combat in 2D platforming.', 
    releaseDate: new Date('2027-01-01'), 
    genres: ['Platformer', 'Action', 'Sci-Fi'], 
    platforms: ['PC'], 
    rating: 3.9, 
    imagePath: '/assets/comingsoon.jpg' },
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
