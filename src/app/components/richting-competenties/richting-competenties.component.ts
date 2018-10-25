import { Component, OnInit } from '@angular/core';
import { CompetentieService } from 'src/app/services/competentie.service';
import { Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-richting-competenties',
  templateUrl: './richting-competenties.component.html',
  styleUrls: ['./richting-competenties.component.css']
})
export class RichtingCompetentiesComponent implements OnInit {
  public filterCompetentieDescription: string;
  public filterCompetentie$ = new Subject<string>();

  constructor(
    private _competentieService: CompetentieService
  ) {
    this.filterCompetentie$
      .pipe(
        distinctUntilChanged(),
        debounceTime(200),
        map(comp => comp.toLowerCase())
      )
      .subscribe(comp => (this.filterCompetentieDescription = comp));
  }

  ngOnInit() {
  }

  public get hoofdCompetenties() {
    console.log(this._competentieService.hoofdcompetenties);
    return this._competentieService.hoofdcompetenties;
  }

}
