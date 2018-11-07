import { Component, OnInit } from '@angular/core';
import { Leerling } from 'src/app/models/leerling.model';

@Component({
  selector: 'app-leerling-hoofdscherm',
  templateUrl: './leerling-hoofdscherm.component.html',
  styleUrls: ['./leerling-hoofdscherm.component.css']
})
export class LeerlingHoofdschermComponent implements OnInit {

  public selectedTab: number;
  public selectedLeerling: Leerling;

  constructor() { }

  ngOnInit() {
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
