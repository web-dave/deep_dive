// src/app/default-flight.service.ts

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Flight } from './flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  // fetch('https://api.swapi.dev/people/1').then(data => data.json())
  // import('https://api.swapi.dev/people/1.js').then()
  // We will refactor this to an observable in a later exercise!
  // flights$$ = new BehaviorSubject()
  flights: Flight[] = [];

  constructor(private http: HttpClient) {}

  load(from: string, to: string): void {
    this.find(from, to).subscribe({
      next: (flights) => {
        this.flights = flights;
      },
      error: (err) => {
        console.error('error', err);
      }
    });
  }

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';

    const headers = new HttpHeaders().set('Accept', 'application/json');

    const params = new HttpParams().set('from', from).set('to', to);

    return this.http.get<Flight[]>(url, { headers, params });
  }

  delay(): void {
    const date = new Date(this.flights[0].date);
    date.setTime(date.getTime() + 1000 * 60 * 15);
    const flight = { ...this.flights[0], date: date.toISOString() };
    this.flights[0] = flight;

    this.flights[1].id = Number(`${this.flights[1].id}e`);
  }

  getCities(): Observable<string[]> {
    const url = 'http://www.angular.at/api/flight';

    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<Flight[]>(url, { headers }).pipe(map((data) => data.map((f) => f.from)));
  }
}
