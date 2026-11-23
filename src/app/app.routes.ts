import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'post-idea',
    loadComponent: () =>
      import('../components/post-idea/post-idea').then(m => m.PostIdea)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '' 
  }
];
