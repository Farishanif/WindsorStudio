export interface Member {
  id: number;
  name: string;
  job: string;
  joinDate: Date;
  imagePath: string;
  team: 'Lead' | 'Developer' | 'Writer' | 'Artist' | 'Sound' ;
}
