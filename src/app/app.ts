import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from '../src/components/login/login';

@Component({
  imports: [
    RouterOutlet,
    LoginComponent
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Idea_Manager');

  onLoginSuccess(user: { username: string; displayName: string }) {
    console.log('Logged in as:', user.username);
  }
}
