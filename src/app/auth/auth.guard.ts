/* eslint-disable @typescript-eslint/no-unused-vars */
import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { first } from 'rxjs/operators';
import { Flight } from '../flight-booking/flight';
import { FlightService } from '../flight-booking/flight.service';
import { HomeComponent } from '../home/home.component';
import { AuthService } from './auth.service';
// eslint-disable @typescript-eslint/no-unused-vars

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanDeactivate<HomeComponent>, Resolve<{ flight: Flight }> {
  auth = inject(AuthService).auth;
  flightService = inject(FlightService);
  go$$ = new Subject<boolean>();
  constructor() {
    setInterval(() => {
      this.go$$.next(true);
    }, 3000);
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): { flight: Flight } {
    console.log('=>', route);
    return { flight: this.flightService.flights[1] };
  }

  canDeactivate(
    component: HomeComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.auth) {
      return this.go$$.pipe(first());
    } else {
      throw new NavigationCancelingError('Not Logged in');
    }
  }
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
