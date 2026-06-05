import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

type NavContext = 'home' | 'list' | 'detail';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [RouterModule]  
})
export class NavbarComponent implements OnInit, OnDestroy {
  activeSection: string = 'hero';
  navContext: NavContext = 'home';
  pageContext: string = '';       
  private observer!: IntersectionObserver;
  private routerSub!: Subscription;

  constructor(
    private router: Router,
    private scroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.scroller.setOffset([0, 80]);

    // Detect route on every navigation
    this.routerSub = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: NavigationEnd) => {
      const url = e.urlAfterRedirects;
      this.updateNavContext(url);
    });

    this.updateNavContext(this.router.url);

    this.initScrollSpy();
  }

  private updateNavContext(url: string): void {
    const isHome = url === '/' || url.startsWith('/home');
    const isDetail = /\/(games|news)\/\w+/.test(url); 
    const isList = /\/(games|news|about)(\/)?$/.test(url);

    if (isHome) {
      this.navContext = 'home';
      this.pageContext = '';
    } else if (isDetail) {
      this.navContext = 'detail';
      this.pageContext = url.includes('games') ? 'games' : 'news';
    } else if (isList) {
      this.navContext = 'list';
      this.pageContext = url.includes('profile') ? 'profile' : 
                         url.includes('games') ? 'games' : 
                         url.includes('contact') ? 'contact' : '';
    }
  }

  private initScrollSpy(): void {
    const sections = ['hero', 'profile', 'games', 'contact'];
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) this.activeSection = entry.target.id;
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) this.observer.observe(el);
    });
  }

  scrollTo(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection = sectionId;
    }
  }

  goBack(): void {
    window.history.back();
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.routerSub?.unsubscribe();
  }
}