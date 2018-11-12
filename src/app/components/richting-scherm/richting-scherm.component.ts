import { Component, OnInit, Input } from '@angular/core';
import { Beoordeling } from 'src/app/models/beoordeling.model';
import { Hoofdcompetentie, Modules } from 'src/app/models/hoofdcompetentie.model';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CompetentieDialogComponent } from '../competentie-dialog/competentie-dialog.component';
import { Richting } from 'src/app/models/richting.model';
import { RichtingService } from 'src/app/services/richting.service';

@Component({
  selector: 'app-richting-scherm',
  templateUrl: './richting-scherm.component.html',
  styleUrls: ['./richting-scherm.component.css']
})
export class RichtingSchermComponent implements OnInit {
  /**
  * Dit is de boolean die je meekrijgt van de parent component om te weten of er een nieuwe richting gemaakt moet worden of niet
  */
  @Input() public new: boolean;
  /**
  * Property om de nieuwe richting die gemaakt is bij te houden
  */
  private _nieuweRichting: Richting;

  /**
  * Constructor van RichtingSchermComponent
  * @param {RichtingService} richtingService
  */
  constructor(
    private _richtingService: RichtingService
    ) {
      this._nieuweRichting = this._richtingService.getNieuweRichting();
      console.log(this._nieuweRichting);
    }


  /**
  * Getter nieuweRichting
  * @return {Richting}
  */
  public get nieuweRichting(): Richting {
    return this.new ? this._nieuweRichting : undefined;
  }

  ngOnInit() {
  }

}
