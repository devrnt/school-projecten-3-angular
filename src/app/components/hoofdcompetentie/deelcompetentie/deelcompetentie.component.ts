import { Component, OnInit, Input } from '@angular/core';
import { Deelcompetentie } from 'src/app/models/deelcompetentie.model';
import { Hoofdcompetentie } from 'src/app/models/hoofdcompetentie.model';

@Component({
  selector: 'app-deelcompetentie',
  templateUrl: './deelcompetentie.component.html',
  styleUrls: ['./deelcompetentie.component.css']
})
export class DeelcompetentieComponent implements OnInit {
  @Input() public edit: boolean;
  @Input() public deelcompetentie: Deelcompetentie;
  @Input() public idHoofdcompetentie: Hoofdcompetentie;
  constructor() { }
  ngOnInit() {
  }

}
