import { Injectable } from '@angular/core';
import { User, UserType } from '../models/user';

@Injectable()
export class LeerkrachtService {
  private _leerkachten: User[];
  constructor() {
    this._leerkachten = [
      new User('Tom', 'De Barman', 'tom@gmail.com', 'WACHTWOORD', UserType.Leerkracht),
      new User('An', 'De Temmerman', 'an@gmail.com', 'WACHTWOORD', UserType.Leerkracht),
      new User('Felix', 'Steels', 'felix@gmail.com', 'WACHTWOORD', UserType.Leerkracht),
      new User('Jan', 'De Meester', 'jan.demeester@gmail.com', 'WACHTWOORD', UserType.Leerkracht),
      new User('Sofie', 'De Juf', 'jan.dejuf@gmail.com', 'WACHTWOORD2', UserType.Leerkracht)
    ];
  }

  /**
   * Getter leerkachten
   * @return {User[]}
   */
  public get leerkachten(): User[] {
    return this._leerkachten;
  }

}
