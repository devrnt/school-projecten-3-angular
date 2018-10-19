import { Injectable } from '@angular/core';
import { Richting } from '../models/richting';
import { User, UserType } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RichtingService {

  constructor() { }

  getRichting(): Richting {
    return new Richting('Informatica',
    [new User('Jan', 'De Meester', 'jan.demeester@gmail.com', 'WACHTWOORD', UserType.Leerkracht),
    new User('Sofie', 'De Juf', 'jan.dejuf@gmail.com', 'WACHTWOORD2', UserType.Leerkracht)]);
  }
}
