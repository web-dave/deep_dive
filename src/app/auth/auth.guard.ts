/* eslint-disable @typescript-eslint/no-unused-vars */
import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
// eslint-disable @typescript-eslint/no-unused-vars

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  auth = inject(AuthService).auth;
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.auth) {
      return true;
    } else {
      throw new NavigationCancelingError('Not Logged in');
    }
  }
}

class NavigationCancelingError extends Error {
  ngNavigationCancelingError = true;
}
