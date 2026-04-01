import { Injectable } from '@angular/core';
import { Game } from './game.model';
import { Observable, of } from 'rxjs';

// Mock Data Source
const MOCK_GAMES: Game[] = [
  { 
    id: 1, 
    title: 'Reachable', 
    tagline: 'A journey about love and passion a pair of younglings', 
    releaseDate: new Date('2026-07-10'), 
    genres: ['Simulation', 'Fantasy'], 
    platforms: ['PC', 'Android', 'IOS'], 
    rating: 4.8, 
    imagePath: '/assets/comingsoon.jpg' 
  },
  { 
    id: 2, 
    title: 'Infecticore', 
    tagline: 'A Mobile survival zombie game in a post-apocalyptic world.', 
    releaseDate: new Date('2027-05-15'), 
    genres: ['Survival', 'Horror'], 
    platforms: [ 'Android', 'IOS'], 
    rating: 4.2, 
    imagePath: '/assets/comingsoon.jpg' 
  },
  { 
    id: 
    3, 
    title: 'Cloud Moon', 
    tagline: 'An Eye Opening Adventure of Discovering the Way to find the Meaning of Life.', 
    releaseDate: new Date('2028-11-10'), 
    genres: ['Platformer', 'Action', 'Sci-Fi'], 
    platforms: ['PC'], 
    rating: 4.6, 
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
