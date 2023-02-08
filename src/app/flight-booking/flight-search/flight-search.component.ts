// src/app/flight-search/flight-search.component.ts

import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, NEVER, Observable, ReplaySubject, Subject, Subscription } from 'rxjs';
import { switchMap, mergeMap, concatMap, exhaustMap, takeUntil } from 'rxjs/operators';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnDestroy {
  terminator$$ = new Subject();

  sub!: Subscription;
  subs: Subscription = new Subscription();

  boom$$ = new ReplaySubject(3);
  from = 'Hamburg';
  to = 'Graz';
  i = 0;
  selectedFlight: Flight | null = null;
  delayFilter = false;

  trigger$$ = new BehaviorSubject({ from: this.from, to: this.to });
  // source$ = this.flightService.find;

  flights$: Observable<Flight[]> = this.trigger$$.pipe(exhaustMap((data) => this.flightService.find(data.from, data.to)));

  basket: { [key: number]: boolean } = {
    3: true,
    5: true
  };

  constructor(private flightService: FlightService) {
    setTimeout(() => {
      this.subs.add(this.boom$$.pipe(takeUntil(this.terminator$$)).subscribe((data) => console.log(data)));
    }, 3000);
  }

  get flights() {
    // We will refactor this to an observable in a later exercise!
    return this.flightService.flights;
  }

  ngOnDestroy(): void {
    this.terminator$$.next();
    this.subs.unsubscribe();
  }

  search(): void {
    // this.flightService.load(this.from, this.to);
    this.trigger$$.next({ from: this.from, to: this.to });
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

  delay(): void {
    this.i++;
    this.boom$$.next('Hallo Provinzial!' + this.i);
    this.flightService.delay();
  }
}
