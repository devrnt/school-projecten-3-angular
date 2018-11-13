import { Component, OnInit, Input } from '@angular/core';
import { Deelcompetentie } from 'src/app/models/deelcompetentie.model';
import { Hoofdcompetentie } from 'src/app/models/hoofdcompetentie.model';

@Component({
  selector: 'app-deelcompetentie-toekennen',
  templateUrl: './deelcompetentie-toekennen.component.html',
  styleUrls: ['./deelcompetentie-toekennen.component.css']
})
export class DeelcompetentieToekennenComponent implements OnInit {
  /**
  * Dit is deelcompetentie dat je doorkrijgt van de parent component
  */
  @Input() public deelcompetentie: Deelcompetentie;
  /**
  * Dit is de Hoofdcompetentie dat je meekrijgt van de parent component
  */
  @Input() public idHoofdcompetentie: Hoofdcompetentie;

  constructor() {
  }

  ngOnInit() {
  }

}
