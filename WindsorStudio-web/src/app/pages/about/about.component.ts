// src/app/pages/about/about.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { AboutService } from '../../services/about/about.service';
import { Member } from '../../services/about/member.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [CommonModule, SharedModule] 
})
export class AboutComponent {
  
  members: Member[] = [];
    
    constructor(private aboutService: AboutService) { }
  
    ngOnInit(): void {
      this.aboutService.getAllMembers().subscribe(data => {
        this.members = data;
      });
    }
}