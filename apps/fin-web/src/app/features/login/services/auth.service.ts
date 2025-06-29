import { provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = provideHttpClient();

  login(email: string, password: string): Observable<User | null> {
    if (email === 'vanderson.dill@fin.com' && password === '123456') {
      return of({
        id: '1',
        name: 'Vanderson Dill',
        email: 'vanderson.dill@fin.com',
        password: '123456',
      });
    }
    return of(null);
  }
}
