// src/app/flight-search/flight-search.component.ts

import { Component } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent {
  boom$$ = new ReplaySubject(3);
  from = 'Hamburg';
  to = 'Graz';
  i = 0;
  selectedFlight: Flight | null = null;
  delayFilter = false;

  basket: { [key: number]: boolean } = {
    3: true,
    5: true
  };

  constructor(private flightService: FlightService) {
    setTimeout(() => {
      this.boom$$.subscribe((data) => console.log(data));
    }, 3000);
  }

  get flights() {
    // We will refactor this to an observable in a later exercise!
    return this.flightService.flights;
  }

  search(): void {
    this.flightService.load(this.from, this.to);
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
