// src/app/services/games/game.model.ts

export interface Game {
  id: number;
  title: string;
  tagline: string;
  releaseDate: Date;
  genres: string[];
  platforms: ('PC' | 'PS5' | 'Xbox' | 'Android' | 'IOS')[];
  rating: number; // e.g., 4.5
  imagePath: string;
}