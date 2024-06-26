import { inject } from '@angular/core';
import { AuthService } from './../services/auth/auth.service';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)
  if (authService.token)
    return true;
  else {
    router.navigate([`/login/${authService.role || "Manager"}`])
    return false
  }
};
