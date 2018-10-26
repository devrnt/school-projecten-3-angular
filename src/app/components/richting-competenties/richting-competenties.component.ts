import { Component, OnInit, Input } from '@angular/core';
import { CompetentieService } from 'src/app/services/competentie.service';
import { Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { Richting } from 'src/app/models/richting';

@Component({
  selector: 'app-richting-competenties',
  templateUrl: './richting-competenties.component.html',
  styleUrls: ['./richting-competenties.component.css']
})
export class RichtingCompetentiesComponent implements OnInit {
  public filterCompetentieDescription: string;
  public filterCompetentie$ = new Subject<string>();
  @Input() public richting: Richting;

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
    return this.richting.competenties;
  }

}
