/* import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from '../components/login/login';
import { IdeaManagerDashboard } from '../components/idea-manager-dashboard/idea-manager-dashboard';

@Component({
  imports: [
    RouterOutlet,
    LoginComponent,
    IdeaManagerDashboard
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Idea_Manager');

  user: { username: string; displayName: string } | null = null;

  onLoginSuccess(user: { username: string; displayName: string }) {
    this.user = user;
  }

  onLogout() {
    this.user = null;
  }
}
 */

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from '../components/login/login';
import { IdeaManagerDashboard } from '../components/idea-manager-dashboard/idea-manager-dashboard';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, IdeaManagerDashboard],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Idea_Manager');
  user: { username: string; displayName: string } | null = null;
  currentPath = '/';

  constructor(private router: Router) {
    // ✅ Track current route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentPath = event.urlAfterRedirects;
      }
    });
  }

  get isDashboard(): boolean {
    return this.currentPath === '/' || this.currentPath === '';
  }

  onLoginSuccess(user: { username: string; displayName: string }) {
    this.user = user;
    this.router.navigate(['/']);
  }

  onLogout() {
    this.user = null;
    this.router.navigate(['/']);
  }
}