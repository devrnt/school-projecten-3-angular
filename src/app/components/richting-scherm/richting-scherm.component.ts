import { Component, OnInit, Input } from '@angular/core';
import { Beoordeling } from 'src/app/models/beoordeling.model';
import { Hoofdcompetentie, Modules } from 'src/app/models/hoofdcompetentie.model';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CompetentieDialogComponent } from '../competentie-dialog/competentie-dialog.component';
import { Richting } from 'src/app/models/richting';

@Component({
  selector: 'app-richting-scherm',
  templateUrl: './richting-scherm.component.html',
  styleUrls: ['./richting-scherm.component.css']
})
export class RichtingSchermComponent implements OnInit {
  @Input() public richting: Richting;
  public nieuweCompetentie: Hoofdcompetentie;

  constructor(
    ) { }

  ngOnInit() {
  }

}
