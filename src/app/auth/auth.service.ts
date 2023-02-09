import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userName: string | null = 'Piet';
  get auth() {
    return this.userName !== null;
  }

  login() {
    this.userName = 'Max';
  }

  logout() {
    this.userName = null;
  }
}
