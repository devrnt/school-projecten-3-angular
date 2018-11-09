import { Component, OnInit } from '@angular/core';
import { Leerling } from 'src/app/models/leerling.model';
import { LeerlingService } from 'src/app/services/leerling.service';

@Component({
  selector: 'app-leerling-hoofdscherm',
  templateUrl: './leerling-hoofdscherm.component.html',
  styleUrls: ['./leerling-hoofdscherm.component.css']
})
export class LeerlingHoofdschermComponent implements OnInit {

  public selectedTab: number;
  public selectedLeerling: Leerling;
  public nieuweLeerling: Leerling;

  constructor(private _leerlingService: LeerlingService) {
  }

  ngOnInit() {
    this.nieuweLeerling  = this._leerlingService.nieuweLeerling();
  }

  public editLeerling(leerling: Leerling) {
    this.selectedTab = 2;
    this.selectedLeerling = leerling;
  }

  public kenCompetentiesToe(leerling: Leerling) {
    this.selectedTab = 1;
    this.selectedLeerling = leerling;
  }

  public changeTab(index: number) {
    this.selectedTab = index;
  }

}
