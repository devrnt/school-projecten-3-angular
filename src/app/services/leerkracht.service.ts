import { Injectable } from '@angular/core';
import { User, UserType } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LeerkrachtService {

  constructor() {
  }

  getAlleLeerkrachten() {
    return [
      new User('Tom', 'De Barman', 'tom@gmail.com', 'WACHTWOORD', UserType.Leerkracht),
      new User('An', 'De Temmerman', 'an@gmail.com', 'WACHTWOORD', UserType.Leerkracht),
      new User('Felix', 'Steels', 'felix@gmail.com', 'WACHTWOORD', UserType.Leerkracht)
    ];
  }
}
