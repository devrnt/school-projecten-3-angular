import { Component, OnInit, ViewChild } from '@angular/core';
import { RichtingService } from 'src/app/services/richting.service';
import { Richting } from '../../models/richting';
import { User, UserType } from '../../models/user';
import { LeerkrachtService } from '../../services/leerkracht.service';

@Component({
  selector: 'app-richting-details',
  templateUrl: './richting-details.component.html',
  styleUrls: ['./richting-details.component.css']
})
export class RichtingDetailsComponent implements OnInit {

  public _richting: Richting;
  public _alleLeerkrachten: User[];

  @ViewChild('selectLeerkracht') selectLeerkracht;

  constructor(
    private _richtingService: RichtingService,
    private _leerkrachtService: LeerkrachtService
  ) { }

  ngOnInit() {
    this._richting = this._richtingService.getRichting();
    this._alleLeerkrachten = this._leerkrachtService.leerkachten;
  }

  get richting(): Richting {
    return this._richting;
  }

  get alleLeerkrachten(): User[] {
    return this._alleLeerkrachten;
  }

  addLeerkracht(leerkracht: User) {
    this._richting.leerkrachten.push(leerkracht);
  }

  deleteLeerkracht(i: number) {
    this.richting.leerkrachten.splice(i, 1);
  }

}
