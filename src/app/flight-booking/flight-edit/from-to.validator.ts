import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { interval, Observable, of, timer } from 'rxjs';
import { map, delay, switchMap, tap, first } from 'rxjs/operators';
import { FlightService } from '../flight.service';

export const fromToValidator = (control: AbstractControl): ValidationErrors => {
  const group = control as FormGroup;
  console.log(group.value);
  const from = group.controls?.from?.value;
  const to = group.controls?.to?.value;
  if (from === to) {
    return { fromTo: 'equal' };
  }
  return {};
};

export const asyncCityValidator =
  (service: FlightService) =>
  (c: AbstractControl): Observable<ValidationErrors> => {
    console.log('asyncCityValidator', c);

    return of(1000).pipe(
      delay(1000),
      tap(() => console.log('Ping')),
      switchMap(() =>
        service.getCities().pipe(
          map((cities) => cities.includes(c.value)),
          map((valid) => (valid ? {} : { asyncCity: true }))
        )
      ),
      first()
    );

    return service.getCities().pipe(
      map((cities) => cities.includes(c.value)),
      map((valid) => (valid ? {} : { asyncCity: true }))
    );
  };
