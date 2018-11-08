import { Component, OnInit, Input } from '@angular/core';
import { Deelcompetentie } from 'src/app/models/deelcompetentie.model';
import { Hoofdcompetentie } from 'src/app/models/hoofdcompetentie.model';

@Component({
  selector: 'app-deelcompetentie',
  templateUrl: './deelcompetentie.component.html',
  styleUrls: ['./deelcompetentie.component.css']
})
export class DeelcompetentieComponent implements OnInit {
  @Input() public deelcompetentie: Deelcompetentie;
  @Input() public idHoofdcompetentie: Hoofdcompetentie;

  public _edit: boolean;

  constructor() {
    this.edit = false;
  }

  ngOnInit() {
  }

  set edit(bool: boolean) {
    this._edit = bool;
  }

  get edit() {
    return this._edit;
  }

  saveDescription() {
    // SAVEN VIA FORM
    this.edit = false;
  }
}
