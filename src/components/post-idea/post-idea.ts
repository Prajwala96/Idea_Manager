import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-idea',
  standalone: true,
  templateUrl: './post-idea.html',
  styleUrl: './post-idea.css'
})
export class PostIdea {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/']);
  }
}
