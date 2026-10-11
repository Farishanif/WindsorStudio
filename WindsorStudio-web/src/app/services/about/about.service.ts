import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { Observable, of } from 'rxjs';

const MOCK_MEMBER: Member[] = [
  { 
    id: 1, 
    name: 'KepperBee', 
    job: 'Project Leader, Manager and Game Developer', 
    joinDate: new Date('2025-11-20'),
    imagePath: '/assets/MTT_KepperBee.png',
    team: 'Lead'
  },
  { 
    id: 2, 
    name: 'Hydra', 
    job: 'Lead Game Developer', 
    joinDate: new Date('2026-10-30'),
    imagePath: '/assets/MTT_Hydra.png',
    team: 'Lead'
  },
  { 
    id: 3, 
    name: 'Farizzz', 
    job: 'Game developer, Web Developer, and Programmer', 
    joinDate: new Date('2025-11-20'),
    imagePath: '/assets/MTT_farizzz.png',
    team: 'Developer'
  },
  { 
    id: 4, 
    name: 'Ryven', 
    job: 'Game developer, and Programmer', 
    joinDate: new Date('2026-07-30'),
    imagePath: '/assets/MTT_Ryven.png',
    team: 'Developer'
  },
  { 
    id: 5, 
    name: 'Dattap', 
    job: 'Game Developer', 
    joinDate: new Date('2025-11-20'),
    imagePath: '/assets/MTT_Dattap.png',
    team: 'Developer'
  }, 
  { 
    id: 6, 
    name: 'Abbhas', 
    job: 'Game developer', 
    joinDate: new Date('2026-07-30'),
    imagePath: '/assets/MTT_Abbhas.png',
    team: 'Developer'
  },
  { 
    id: 7, 
    name: 'Erika', 
    job: 'Game Designer and Concept Artist', 
    joinDate: new Date('2025-11-20'),
    imagePath: '/assets/comingsoon.jpg',
    team: 'Artist'
  },
  { 
    id: 8, 
    name: 'Adinda :3', 
    job: 'Game Artist and Designer', 
    joinDate: new Date('2025-11-20'),
    imagePath: '/assets/MTT_Adindachair.png',
    team: 'Artist'
  },
  { 
    id: 9, 
    name: 'Keenan', 
    job: 'Concept Artist Designer', 
    joinDate: new Date('2025-11-20'),
    imagePath: '/assets/MTT_Keenan.png',
    team: 'Artist'
  },
  { 
    id: 10, 
    name: 'Marie', 
    job: 'Concept Artist Designer', 
    joinDate: new Date('2025-11-20'),
    imagePath: '/assets/MTT_Marie.png',
    team: 'Artist'
  },
  { 
    id: 11, 
    name: 'Hamnah', 
    job: 'Writer', 
    joinDate: new Date('2026-07-30'),
    imagePath: '/assets/MTT_Hamnah.png',
    team: 'Writer'
  },
  { 
    id: 12, 
    name: 'Slap', 
    job: 'Writer', 
    joinDate: new Date('2026-07-30'),
    imagePath: '/assets/MTT_Slap.png',
    team: 'Writer'
  },
  { 
    id: 13, 
    name: 'Gessie', 
    job: 'Writer', 
    joinDate: new Date('2026-07-30'),
    imagePath: '/assets/MTT_Gessie.png',
    team: 'Writer'
  },
  { 
    id: 14, 
    name: 'Mandy', 
    job: 'Writer', 
    joinDate: new Date('2026-07-30'),
    imagePath: '/assets/MTT_Mandy.png',
    team: 'Writer'
  },
  { 
    id: 15, 
    name: 'Krylkh', 
    job: 'Sound Designer', 
    joinDate: new Date('2026-07-30'),
    imagePath: '/assets/MTT_Krylkh.png',
    team: 'Sound'
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
