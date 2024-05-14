import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)
  console.log(authService.role);

  if (authService.role === "Manager") {
    return true
  }
  else {
    router.navigate([`/managers`])
    return false

  }

};
