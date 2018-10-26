import { Component, OnInit } from '@angular/core';
import { Richting } from 'src/app/models/richting';

@Component({
  selector: 'app-richting-hoofdscherm',
  templateUrl: './richting-hoofdscherm.component.html',
  styleUrls: ['./richting-hoofdscherm.component.css']
})
export class RichtingHoofdschermComponent implements OnInit {

  public selectedTab: number;
  public selectedRichting: Richting;

  constructor() { }

  ngOnInit() {
  }

  public editRichting(richting: Richting) {
    this.selectedTab = 1;
    this.selectedRichting = richting;
  }

  public changeTab(index: number) {
    this.selectedTab = index;
  }

}
