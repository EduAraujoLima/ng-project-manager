import { Routes } from '@angular/router';
const AUTH_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./auth-container.component'),
    children: [
      {
        title: 'Sign In',
        path: 'sign-in',
        loadComponent: () => import('./sign-in.component'),
      }
    ]
  }
]

export default AUTH_ROUTES;
