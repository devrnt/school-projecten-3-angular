<<<<<<< HEAD
import { Component, OnInit, ViewChild } from '@angular/core';
import { RichtingService } from 'src/app/services/richting.service';
import { Richting } from '../../models/richting';
import { User, UserType } from '../../models/user';
import { LeerkrachtService } from '../../services/leerkracht.service';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 1635ea9080573b3b3cbf03c32320ae9af7de8d12

@Component({
  selector: 'app-richting',
  templateUrl: './richting.component.html',
  styleUrls: ['./richting.component.css']
})
export class RichtingComponent implements OnInit {

<<<<<<< HEAD
  public _richting: Richting;
  public _alleLeerkrachten: User[];

  @ViewChild('selectLeerkracht') selectLeerkracht;

  constructor(
    private _richtingService: RichtingService,
    private _leerkrachtService: LeerkrachtService
  ) { }

  ngOnInit() {
    this._richting = this._richtingService.getRichting();
    this._alleLeerkrachten = this._leerkrachtService.getAlleLeerkrachten();
  }

  get richting(): Richting {
    return this._richting;
  }

  get alleLeerkrachten(): User[] {
    return this._alleLeerkrachten;
  }

  addLeerkracht(leerkracht: User) {
    this._richting.leerkrachten.push(leerkracht);
    this.selectLeerkracht.value = undefined;
  }

  deleteLeerkracht(i: number) {
    this.richting.leerkrachten.splice(i, 1);
=======
  constructor() { }

  ngOnInit() {
>>>>>>> 1635ea9080573b3b3cbf03c32320ae9af7de8d12
  }

}
