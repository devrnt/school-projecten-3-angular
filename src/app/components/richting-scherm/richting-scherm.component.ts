import { Component, OnInit, Input } from '@angular/core';
import { Beoordeling } from 'src/app/models/beoordeling.model';
import { Hoofdcompetentie, Modules } from 'src/app/models/hoofdcompetentie.model';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CompetentieDialogComponent } from '../competentie-dialog/competentie-dialog.component';
import { Richting } from 'src/app/models/richting';
import { RichtingService } from 'src/app/services/richting.service';

@Component({
  selector: 'app-richting-scherm',
  templateUrl: './richting-scherm.component.html',
  styleUrls: ['./richting-scherm.component.css']
})
export class RichtingSchermComponent implements OnInit {
  @Input() public new: boolean;
  private _nieuweRichting: Richting;

  constructor(
    private _richtingService: RichtingService
    ) {
      this._nieuweRichting = this._richtingService.getNieuweRichting();
    }

    public get nieuweRichting(): Richting {
      return this.new ? this._nieuweRichting : undefined;
    }

  ngOnInit() {
  }

}
