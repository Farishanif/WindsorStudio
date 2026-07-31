import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { Observable, of } from 'rxjs';

const MOCK_MEMBER: Member[] = [
  { 
    id: 1, 
    name: 'KepperBee', 
    job: 'Lead Developer / Project Leader', 
    joinDate: new Date('2025-11-20'),
    imagePath: '/assets/MTT_KepperBee.png',
    team: 'core'
  },
  { 
    id: 2, 
    name: 'Dattap', 
    job: 'Senior Game Developer', 
    joinDate: new Date('2025-11-20'),
    imagePath: '/assets/MTT_Dattap.png',
    team: 'core'
  },
  { 
    id: 3, 
    name: 'Erika', 
    job: 'Game Designer and Concept Artist', 
    joinDate: new Date('2025-11-20'),
    imagePath: '/assets/comingsoon.jpg',
    team: 'core'
  },
  { 
    id: 4, 
    name: 'Farizzz', 
    job: 'Game developer and Programmer', 
    joinDate: new Date('2025-11-20'),
    imagePath: '/assets/MTT_farizzz.png',
    team: 'core'
  },
  { 
    id: 5, 
    name: 'Adinda :3', 
    job: 'Game Artist and Designer', 
    joinDate: new Date('2025-11-20'),
    imagePath: '/assets/MTT_Adindachair.png',
    team: 'core'
  },
  { 
    id: 6, 
    name: 'Keenan', 
    job: 'Concept Artist Designer', 
    joinDate: new Date('2025-11-20'),
    imagePath: '/assets/MTT_Keenan.png',
    team: 'core'
  },
  { 
    id: 7, 
    name: 'Marie', 
    job: 'Concept Artist Designer', 
    joinDate: new Date('2025-11-20'),
    imagePath: '/assets/MTT_Marie.png',
    team: 'core'
  },
  ...[
    ['lewis', 'Programmer'],
    ['Rares', 'Programmer'],
    ['Ryven', 'Programmer'],
    ['abhas', 'Programmer'],
    ['Slap', 'Writer'],
    ['Noctai', 'Writer'],
    ['Hamnah', 'Writer'],
    ['Marysal', 'Artist'],
    ['Mandy', 'Writer, Artist'],
    ['Nela', 'Artist'],
    ['Gessie', 'Artist, Writer'],
    ['Krylkh', 'Sound Designer']
  ].map(([name, job], index): Member => ({
    id: index + 8,
    name,
    job,
    joinDate: new Date('2026-07-30'),
    imagePath: `/assets/MTT_${name}.png`,
    team: 'new'
  }))
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
