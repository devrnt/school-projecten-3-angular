import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Richting } from 'src/app/models/richting';

@Component({
  selector: 'app-richting-overzicht-scherm',
  templateUrl: './richting-overzicht-scherm.component.html',
  styleUrls: ['./richting-overzicht-scherm.component.css']
})
export class RichtingOverzichtSchermComponent implements OnInit {

  @Output() edit = new EventEmitter<Richting>();

  constructor() { }

  ngOnInit() {
  }

  public editRichting(richting: Richting) {
    this.edit.emit(richting);
  }

}
