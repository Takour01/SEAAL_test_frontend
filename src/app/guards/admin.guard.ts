import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { inject } from '@angular/core';


export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)
  console.log(authService.role);

  if (authService.role === "Manager") {
    router.navigate([`/manager`])
    return false;
  }
  else {
    return true

  }

};
