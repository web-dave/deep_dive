import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooService {
  date = new Date().getMilliseconds();
}
