import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { Observable, of } from 'rxjs';

const MOCK_MEMBER: Member[] = [
  { 
    id: 1, 
    name: 'KeeperBee', 
    job: 'Lead Developer / Project Leader', 
    joinDate: new Date('2025-11-20'),
    description: 'Visionary behind the Windsor principle.', 
    imagePath: '/assets/comingsoon.jpg'
  },
  { 
    id: 2, 
    name: 'Dattap', 
    job: 'Senior Game Developer', 
    joinDate: new Date('2025-11-20'),
    description: 'Specializes in scalable game engine architecture.', 
    imagePath: '/assets/comingsoon.jpg'
  },
  { 
    id: 3, 
    name: 'Erica', 
    job: 'Game Designer and Concept Artist', 
    joinDate: new Date('2025-11-20'),
    description: 'Specializes in creating engaging game concepts and designs.', 
    imagePath: '/assets/comingsoon.jpg'
  },
  { 
    id: 4, 
    name: 'Farizzz', 
    job: 'Game developer and Programmer', 
    joinDate: new Date('2025-11-20'),
    description: 'Focuses on creating efficient and maintainable game code.', 
    imagePath: '/assets/comingsoon.jpg'
  },
  { 
    id: 5, 
    name: 'Adindachair', 
    job: 'Game Artist and Designer', 
    joinDate: new Date('2025-11-20'),
    description: 'Focuses on evocative and immersive world design.', 
    imagePath: '/assets/comingsoon.jpg'
  },
  { 
    id: 6, 
    name: 'Keenan', 
    job: 'Sound Designer', 
    joinDate: new Date('2025-11-20'),
    description: 'Collaborates with the sound designer team to create immersive soundscapes.', 
    imagePath: '/assets/comingsoon.jpg'
  },
  { 
    id: 7, 
    name: 'Maffy', 
    job: 'Sound Designer', 
    joinDate: new Date('2025-11-20'),
    description: 'Collaborates with the sound designer team to create immersive soundscapes.', 
    imagePath: '/assets/comingsoon.jpg'
  },
  { 
    id: 8, 
    name: 'Sus K9', 
    job: 'Support Programmer', 
    joinDate: new Date('2025-11-20'),
    description: 'Supports the development team with programming tasks.', 
    imagePath: '/assets/comingsoon.jpg'
  },
  { 
    id: 9, 
    name: 'Elle', 
    job: 'Support Game Artist', 
    joinDate: new Date('2025-11-20'),
    description: 'Supporting in game art and design.', 
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
