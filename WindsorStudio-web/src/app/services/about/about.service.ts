import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { Observable, of } from 'rxjs';

const MOCK_MEMBER: Member[] = [
  { 
    id: 1, 
    name: 'KepperBee', 
    job: 'Lead Developer / Project Leader', 
    joinDate: new Date('2025-11-20'),
    imagePath: '/assets/MTT_KepperBee.png'
  },
  { 
    id: 2, 
    name: 'Dattap', 
    job: 'Senior Game Developer', 
    joinDate: new Date('2025-11-20'),
    imagePath: '/assets/MTT_Dattap.png'
  },
  { 
    id: 3, 
    name: 'Erika', 
    job: 'Game Designer and Concept Artist', 
    joinDate: new Date('2025-11-20'),
    imagePath: '/assets/comingsoon.jpg'
  },
  { 
    id: 4, 
    name: 'Farizzz', 
    job: 'Game developer and Programmer', 
    joinDate: new Date('2025-11-20'),
    imagePath: '/assets/MTT_farizzz.png'
  },
  { 
    id: 5, 
    name: 'Adinda :3', 
    job: 'Game Artist and Designer', 
    joinDate: new Date('2025-11-20'),
    imagePath: '/assets/MTT_Adindachair.png'
  },
  { 
    id: 6, 
    name: 'Keenan', 
    job: 'Concept Artist Designer', 
    joinDate: new Date('2025-11-20'),
    imagePath: '/assets/comingsoon.jpg'
  },
  { 
    id: 7, 
    name: 'Maffy', 
    job: 'Concept Artist Designer', 
    joinDate: new Date('2025-11-20'),
    imagePath: '/assets/MTT_Maffy.png'
  },
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
