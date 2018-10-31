import { Component, OnInit, Input } from '@angular/core';
import { CompetentieService } from 'src/app/services/competentie.service';
import { Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { Richting } from 'src/app/models/richting';
import { Modules } from 'src/app/models/hoofdcompetentie.model';

@Component({
  selector: 'app-richting-competenties',
  templateUrl: './richting-competenties.component.html',
  styleUrls: ['./richting-competenties.component.css']
})
export class RichtingCompetentiesComponent implements OnInit {
  public modules = new Array<string>();
  public beschrijving: '';
  public module: '';
  @Input() public richting: Richting;

  constructor(
  ) {
    // this.filterCompetentie$
    //   .pipe(
    //     distinctUntilChanged()
    //     map(comp => comp.toLowerCase())
    //   )
    //   .subscribe((value: any) => {
    //     console.log('Dit is de value waar ik op subscribe', value);
    //     this.filterCompetentieDescription = value;
    //   });
  }

  ngOnInit() {
    this.modules = Object.values(Modules);
  }

  public get hoofdCompetenties() {
    // console.log(this.richting);
    if (this.richting) {
      return this.richting.competenties;
    }
    return [];
  }

}
