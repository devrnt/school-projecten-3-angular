import { Injectable } from '@angular/core';
import { Richting, Diploma } from '../models/richting';
import { User, UserType } from '../models/user';
import { LeerlingService } from './leerling.service';
import { LeerkrachtService } from './leerkracht.service';

@Injectable({
  providedIn: 'root'
})
export class RichtingService {
  private _richtingen: Richting[];
  constructor(private _leerlingService: LeerlingService, private _leerkrachtService: LeerkrachtService) {
    this._richtingen = [];
    const leerkrachten = _leerkrachtService.leerkachten;
    const leerlingen = _leerlingService.leerlingen;
    this._richtingen[0] =
    new Richting(
      'Informatica',
      [
        leerkrachten[3],
        leerkrachten[4]
      ],
      [
        leerlingen[0],
        leerlingen[1],
        leerlingen[2],
      ],
      [
      ],
      [

      ],
      Diploma.TSO

    );
  }

  public getRichting(): Richting {
    return this._richtingen[0];
  }
}
