import { Component, OnInit } from '@angular/core';
import { CompetentieService } from 'src/app/services/competentie.service';

@Component({
  selector: 'app-richting-competenties',
  templateUrl: './richting-competenties.component.html',
  styleUrls: ['./richting-competenties.component.css']
})
export class RichtingCompetentiesComponent implements OnInit {
  private 

  constructor(
    private _competentieService: CompetentieService
  ) { }

  ngOnInit() {
  }

  public get hoofdCompetenties() {
    console.log(this._competentieService.hoofdcompetenties);
    return this._competentieService.hoofdcompetenties;
  }

}
