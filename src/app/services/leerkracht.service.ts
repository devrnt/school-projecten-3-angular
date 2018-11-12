import { Injectable } from '@angular/core';
import { User, UserType } from '../models/user.model';

@Injectable()
export class LeerkrachtService {
  private _leerkachten: User[];
  constructor() {
    this._leerkachten = [
      new User(1, 'Tom', 'De Barman', 'tom@gmail.com', 'WACHTWOORD', UserType.Leerkracht),
      new User(2, 'An', 'De Temmerman', 'an@gmail.com', 'WACHTWOORD', UserType.Leerkracht),
      new User(3, 'Felix', 'Steels', 'felix@gmail.com', 'WACHTWOORD', UserType.Leerkracht),
      new User(4, 'Jan', 'De Meester', 'jan.demeester@gmail.com', 'WACHTWOORD', UserType.Leerkracht),
      new User(6, 'Sofie', 'De Juf', 'jan.dejuf@gmail.com', 'WACHTWOORD2', UserType.Leerkracht)
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
