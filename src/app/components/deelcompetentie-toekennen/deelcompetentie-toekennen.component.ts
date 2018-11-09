import { Component, OnInit, Input } from '@angular/core';
import { Deelcompetentie } from 'src/app/models/deelcompetentie.model';
import { Hoofdcompetentie } from 'src/app/models/hoofdcompetentie.model';

@Component({
  selector: 'app-deelcompetentie-toekennen',
  templateUrl: './deelcompetentie-toekennen.component.html',
  styleUrls: ['./deelcompetentie-toekennen.component.css']
})
export class DeelcompetentieToekennenComponent implements OnInit {
  @Input() public deelcompetentie: Deelcompetentie;
  @Input() public idHoofdcompetentie: Hoofdcompetentie;

  constructor() {
  }

  ngOnInit() {
  }

}
