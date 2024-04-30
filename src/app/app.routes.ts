import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path: 'register',
    component: LoginComponent,
    // loadChildren: () =>
    //   import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'login',
    component: RegisterComponent,
    // loadChildren: () =>
    //   import('./register/register.component').then((m) => m.RegisterComponent),
  },
];
