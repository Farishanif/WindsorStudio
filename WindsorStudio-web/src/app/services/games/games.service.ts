import { Injectable } from '@angular/core';
import { Game } from './game.model';
import { Observable, of } from 'rxjs';

// Mock Data Source
const MOCK_GAMES: Game[] = [
  { 
    id: 1, 
    title: 'Reachable', 
    tagline: `A visual novel game with multiple endings. An exploration of how ambition reshapes love.`, 
    description: `Nataliel and Nobel, high school friends united by their passion for science, grew into a loving couple in college. Their relationship begins to strain when Nobel is selected to represent their university in a national competition, leaving him increasingly distant as he focuses on his ambitions. Hoping to reconnect, Nataliel decides to compete in the biology division of the same competition with the help of her friend Kim. Along the way, however, she realizes that her journey is no longer just about winning Nobel back, but about discovering whether their relationship can still be saved or whether she must instead find her own path and identity.`,
    releaseDate: null, //new Date('2026-11-10'), 
    genres: ['Visual Novel','Romance','Sci-fi'], 
    platforms: ['PC'], 
    rating: 5.0, 
    imagePath: '/assets/GG_reachable.png' 
  },
  { 
    id: 2, 
    title: 'Infecticore', 
    tagline: `A covert survival RPG where a captured task force must escape a secret island facility and expose a conspiracy before it unleashes a global catastrophe.`, 
    description: `A covert task force is sent to a remote island to investigate reports of an illegal biological weapons program allegedly operated by the secretive Prion Group. While infiltrating the organization's main laboratory, the team discovers that its synthetic meat business is merely a cover for the development of “Core”, an engineered infectious misfolded protein designed to trigger fatal insomnia, violent psychosis, and death, making it a devastating and perfectly hidden bioweapon that threatens all human life. Although the operatives gather enough evidence to expose the conspiracy and its backers, they are ambushed by the facility's security forces before they can escape, ultimately being overwhelmed and taken hostage. How long will you be stuck here? Will there be anything left to save in the world once you escape?`,
    releaseDate: null, //new Date('2026-07-15'), 
    genres: ['Survival', 'Horror', 'Action'], 
    platforms: [ 'Android', 'IOS'], 
    rating: 5.0, 
    imagePath: '/assets/GG_infecticore.png' 
  },
  { 
    id: 3, 
    title: 'Cloud Moon', 
    tagline: `A 2D side-scroller that dwells into the darker reality of the life of a schizophrenic girl.`, 
    description: `Exploring the theme of grief and guilt through the eyes of Catherine, a 15 year old girl suffering from schizophrenia. Haunted by the loss of the stray cats she could never save, Catherine believes they now live peacefully in the Moon Realm, a heaven for cats. When a magical cat named Cloudy invites her to visit this world, what begins as a heartwarming reunion soon transforms into a haunting journey as Catherine's guilt causes the realm to unravel, forcing her to relive the tragedies that once broke her heart. As the line between reality and fantasy fades, Catherine's unresolved trauma manifests into terrifying nightmares that threaten to consume her mind. Meanwhile, her friends refuse to abandon her, doing everything they can to remind her that healing can only begin by facing reality rather than escaping it. What starts as Catherine's personal struggle soon becomes a desperate fight for those who care about her, as they race to pull her back before she becomes forever lost in the world she created to escape her pain.`,
    releaseDate: null, //new Date('2026-06-10'), 
    genres: ['Side-Scrolling', 'Adventure','Psychological'], 
    platforms: ['PC'], 
    rating: 5.0, 
    imagePath: '/assets/GG_cloudmoon.png' },
    { 
    id: 4, 
    title: 'Hearts', 
    tagline: `A fast-paced, turn-based card battler where the players can chain powerful effects, stack devastating combos, and outplay their opponents in an intense battle with various game modes.`, 
    description: `In this competitive deck-building strategy card game, every decision shapes the outcome of the battle. Choose your class and combat style and forge your own path by mastering powerful card combinations and unique strategies. Challenge opponents in intense one-on-one duels, chaotic free-for-all battles, or tactical team fights, each featuring customizable match settings and the unforgiving Deathless mode. Every match offers a fresh challenge where skill, adaptability, and deck mastery determine who will emerge victorious.`,
    releaseDate: null, //new Date('2026-05-10'), 
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
