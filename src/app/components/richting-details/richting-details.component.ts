import { Component, OnInit, ViewChild, Input } from '@angular/core';
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

  @Input() public richting: Richting;
  public alleLeerkrachten: User[];

  constructor(
    private _richtingService: RichtingService,
    private _leerkrachtService: LeerkrachtService
  ) { }

  ngOnInit() {
    this.richting = this._richtingService.getRichting();
    this.alleLeerkrachten = this._leerkrachtService.leerkachten;
  }

  addLeerkracht(leerkracht: User) {
    this.richting.leerkrachten.push(leerkracht);
  }

  deleteLeerkracht(i: number) {
    this.richting.leerkrachten.splice(i, 1);
  }

}
