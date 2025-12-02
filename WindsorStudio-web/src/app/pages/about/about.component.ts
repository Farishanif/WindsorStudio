// src/app/pages/about/about.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module'; // Adjust path

@Component({
  selector: 'app-about',
  standalone: true, // <-- Must be Standalone!
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [CommonModule, SharedModule] 
})
export class AboutComponent {
  // Mock data for the team members
  teamMembers = [
    { name: 'Elias Vance', title: 'Creative Director', photo: '/assets/images/team/elias.jpg', bio: 'Visionary behind the Windstar universe.' },
    { name: 'Lana Chen', title: 'Lead Programmer', photo: '/assets/images/team/lana.jpg', bio: 'Specializes in scalable game engine architecture.' },
    { name: 'Marco Rodriguez', title: 'Lead Environment Artist', photo: '/assets/images/team/marco.jpg', bio: 'Focuses on evocative and immersive world design.' },
  ];
}