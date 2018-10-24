import { Component, OnInit } from '@angular/core';
import { LeerlingService } from 'src/app/services/leerling.service';
import { RichtingService } from 'src/app/services/richting.service';
import { Subject } from 'rxjs';
import { Richting } from 'src/app/models/richting';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-richtingen-view',
  templateUrl: './richtingen-view.component.html',
  styleUrls: ['./richtingen-view.component.css']
})
export class RichtingenViewComponent implements OnInit {
  public filterRichtingenNaam: string;
  public filterRichting$ = new Subject<string>();
  private _richtingen: Richting[];

  constructor(private _richtingService: RichtingService) {
    this.filterRichting$
      .pipe(
        distinctUntilChanged(),
        debounceTime(200),
        map(rich => rich.toLowerCase())
      )
      .subscribe(rich => (this.filterRichtingenNaam = rich));
  }

  public get richtingen() {
    return this._richtingService.richtingen;
  }

  ngOnInit() {
  }

}
