import { Component, OnInit } from '@angular/core';
import { Richting } from 'src/app/models/richting.model';
import { RichtingService } from 'src/app/services/richting.service';
import { RichtingenViewComponent } from '../richtingen-view/richtingen-view.component';

@Component({
  selector: 'app-richting-hoofdscherm',
  templateUrl: './richting-hoofdscherm.component.html',
  styleUrls: ['./richting-hoofdscherm.component.css']
})
export class RichtingHoofdschermComponent implements OnInit {
  /**
  * Property om de geselecteerde tab bij te houden
  */
  public selectedTab: number;
  /**
  * Property om alle richtingen bij te houden
  */
  public richtingen: Richting[];
  /**
  * Property om de geselecteerde richting bij te houden
  */
  public selected: Richting;

  /**
  * Constructor van RichtingHoofdschermComponent
  * @param {RichtingService} richtingService
  */
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

  /**
  * Getter selectedRichting
  * @return {Richting}
  */
  public get selectedRichting(): Richting {
    return this._richtingService.geselecteerdeRichting;
  }

  /**
  * Setter selectedRichting
  * @param {Richting} geselecteerdeRichting
  */
  public set selectedRichting(richting: Richting) {
    this._richtingService.geselecteerdeRichting = richting;
  }

  /**
  * Methode om de juiste tab in te stellen
  * @param {number} index
  */
  public changeTab(index: number) {
    this.selectedTab = index;
    console.log(this.selectedTab);
  }

}
