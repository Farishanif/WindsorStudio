import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { Observable, of } from 'rxjs';

const MOCK_MEMBER: Member[] = [
  { 
    id: 1, 
    name: 'KeeperBee', 
    job: 'Creative Director', 
    joinDate: new Date('2025-11-20'),
    description: 'Visionary behind the Windstar universe.', 
    imagePath: '/assets/comingsoon.jpg'
  },
  { 
    id: 2, 
    name: 'Fariz', 
    job: 'Lead Programmer', 
    joinDate: new Date('2025-11-20'),
    description: 'Specializes in scalable game engine architecture.', 
    imagePath: '/assets/comingsoon.jpg'
  },
  { 
    id: 3, 
    name: 'Adinda', 
    job: 'Art Director', 
    joinDate: new Date('2025-11-20'),
    description: 'Focuses on evocative and immersive world design.', 
    imagePath: '/assets/comingsoon.jpg'
  }
];

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() { }

  getAllMembers(): Observable<Member[]> {
    return of(MOCK_MEMBER); 
  }

  getMemberById(id: number): Observable<Member | undefined> {
    const member = MOCK_MEMBER.find(a => a.id === id);
    return of(member);
  }
}