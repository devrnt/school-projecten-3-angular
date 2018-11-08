import { Component, OnInit } from '@angular/core';
import { Richting } from 'src/app/models/richting';
import { RichtingService } from 'src/app/services/richting.service';
import { RichtingenViewComponent } from '../richtingen-view/richtingen-view.component';

@Component({
  selector: 'app-richting-hoofdscherm',
  templateUrl: './richting-hoofdscherm.component.html',
  styleUrls: ['./richting-hoofdscherm.component.css']
})
export class RichtingHoofdschermComponent implements OnInit {

  public selectedTab: number;
  public richtingen: Richting[];
  public selected: Richting;

  constructor(private _richtingService: RichtingService) {
    this.selectedTab = 0;
  }

  ngOnInit() {
    this.richtingen = this._richtingService.richtingen;
    this._richtingService.richting$.subscribe( r => {
      this.selected = r;
      if (this.selected) {
        this.changeTab(1);
      }
    });
  }

  public get selectedRichting(): Richting {
    return this._richtingService.geselecteerdeRichting;
  }

  public set selectedRichting(richting: Richting) {
    this._richtingService.geselecteerdeRichting = richting;
  }

  public changeTab(index: number) {
    this.selectedTab = index;
    console.log(this.selectedTab);
  }

}
