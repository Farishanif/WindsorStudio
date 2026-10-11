import { Component, ChangeDetectorRef, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GamesService } from '../../services/games/games.service';
import { AboutService } from '../../services/about/about.service'; 
import { forkJoin } from 'rxjs'; 

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent implements OnInit {
  isOpen = false;
  userInput = '';
  isLoading = false;
  private backendUrl = environment.aiBackendUrl; 

  @ViewChild('chatBody') private chatBodyContainer!: ElementRef;

  chatHistory: any[] = [];

  constructor(
    private cdr: ChangeDetectorRef,
    private gamesService: GamesService,
    private aboutService: AboutService
  ) { }

  ngOnInit(): void {
    // 2. forkJoin executes both backend database/mock streams in parallel
    forkJoin({
      games: this.gamesService.getAllGames(),
      members: this.aboutService.getAllMembers()
    }).subscribe({
      next: (result) => {
        // 3. Cleanly stringify both data sets independently
        const gamesJsonData = JSON.stringify(result.games, null, 2);
        const membersJsonData = JSON.stringify(result.members, null, 2);

        // 4. Inject both compiled strings securely into the system context
        const systemPrompt = {
          role: 'system',
          content: `You are the AI representative for Windsor Studio. 
          Answer questions enthusiastically about Windsor Studio.

          Windsor Studio is a Game development Studio founded and realized by a great visioner called KeeperBee.
          The ai assistant creator and main Website Developer is named Faris.
          If you don't know the answer, say "I don't know" instead of making up an answer.

          # OFFICIAL WINDSOR STUDIO GAMES CATALOG DATA:
          ${gamesJsonData}

          # OFFICIAL WINDSOR STUDIO ABOUT MEMBER DATA:
          ${membersJsonData}

          STRICT FORMATTING RULES:
          1. MAXIMUM LENGTH: Your total response must be concise and never exceed a maximum of 3 paragraphs.
          2. PARAGRAPH STRUCTURE: Separate distinct ideas with clean, double-spaced line breaks (\\n\\n) so the layout remains readable.
          3. NO WALLS OF TEXT: Keep individual paragraphs brief and direct (under 3 sentences per paragraph).`
        };

        this.chatHistory = [systemPrompt];
      },
      error: (err) => {
        console.error('Failed to pre-load multiple context layers:', err);
      }
    });
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    
    if (this.isOpen && this.chatHistory.length === 1) {
      this.chatHistory.push({
        role: 'assistant',
        content: 'Hello! I am the AI representative for Windsor Studio. Ask me anything that you want to know about our games catalog or development stack!'
      });
      this.cdr.detectChanges();
      this.scrollToBottom(); 
    }
  }

  async sendMessage() {
    if (!this.userInput.trim() || this.isLoading) return;

    const userQuery = this.userInput;
    this.chatHistory.push({ role: 'user', content: userQuery });
    this.userInput = '';
    this.isLoading = true;
    this.cdr.detectChanges();
    this.scrollToBottom();

    try {
      const response = await fetch(this.backendUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: this.chatHistory })
      });

      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      const data = await response.json();

      let aiReplyText = data.response || data.result?.response || "Payload parsing anomaly.";
      this.chatHistory.push({ role: 'assistant', content: aiReplyText });

    } catch (error) {
      console.error(error);
      this.chatHistory.push({ role: 'assistant', content: 'Connection failure.' });
    } finally {
      this.isLoading = false;
      this.cdr.detectChanges();
      this.scrollToBottom(); 
    }
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      try {
        const element = this.chatBodyContainer.nativeElement;
        element.scrollTop = element.scrollHeight;
      } catch (err) {
        console.warn('Scroll container not ready yet:', err);
      }
    }, 50);
  }
}
