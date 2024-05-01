import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { AuthService } from './auth.service';

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.user$.pipe(
    filter((currentUser) => currentUser !== undefined),
    map((currentUser) => {
      if (!currentUser) {
        router.navigateByUrl('/');
        return false;
      }
      return true;
    })
  );
};
