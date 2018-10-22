import { Injectable } from '@angular/core';
import { Richting, Diploma } from '../models/richting';
import { User, UserType } from '../models/user';
import { LeerlingService } from './leerling.service';
import { LeerkrachtService } from './leerkracht.service';

@Injectable()
export class RichtingService {
  private _richtingen: Richting[];
  constructor(private _leerkrachtService: LeerkrachtService) {
    this._richtingen = [];
    const leerkrachten = _leerkrachtService.leerkachten;
    this._richtingen = [
      new Richting(
        'Informatica',
        [
          leerkrachten[3],
          leerkrachten[4]
        ],
        []
        ,
        [
        ],
        Diploma.TSO
      ),
      new Richting(
        'Haarzorg',
        [
          leerkrachten[0],
          leerkrachten[1]
        ],
        []
        ,
        [
        ],
        Diploma.TSO
      ),
      new Richting(
        'Kantoor',
        [
          leerkrachten[1],
          leerkrachten[2]
        ],
        []
        ,
        [
        ],
        Diploma.TSO
      )
    ];
  }

  public getRichting(): Richting {
    return this._richtingen[0];
  }

  public  get richtingen(): Richting[] {
    return this._richtingen;
  }
}
