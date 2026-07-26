export interface Game {
  id: number;
  title: string;
  tagline: string;
  releaseDate: Date | null;
  genres: string[];
  platforms: ('PC' | 'PS5' | 'Xbox' | 'Android' | 'IOS')[];
  rating: number; // e.g., 4.5
  imagePath: string;
}