import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

        {
        path: 'login',
        loadComponent: () =>
          import('./Pages/login-component/login-component').then((m) => m.LoginComponent),
        title: 'Login Page',
      },

        {
        path: 'home',
        loadComponent: () =>
          import('./Pages/home/home').then((m) => m.Home),
        title: 'Home Page',
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./Pages/register-component/register-component').then(
            (m) => m.RegisterComponent
          ),
        title: 'Register Page',
      },

];
