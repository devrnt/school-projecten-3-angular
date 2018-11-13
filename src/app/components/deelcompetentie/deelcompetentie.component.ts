import { Component, OnInit, Input } from '@angular/core';
import { Deelcompetentie } from 'src/app/models/deelcompetentie.model';
import { Hoofdcompetentie } from 'src/app/models/hoofdcompetentie.model';

@Component({
  selector: 'app-deelcompetentie',
  templateUrl: './deelcompetentie.component.html',
  styleUrls: ['./deelcompetentie.component.css']
})
export class DeelcompetentieComponent implements OnInit {
  /**
  * Dit is deelcompetentie dat je doorkrijgt van de parent component
  */
  @Input() public deelcompetentie: Deelcompetentie;
  /**
  * Dit is hoofdcompetentie dat je doorkrijgt van de parent component
  */
  @Input() public idHoofdcompetentie: Hoofdcompetentie;
  /**
  * Dit is boolean dat je doorkrijgt van de parent component om te weten welke elementen getoond moeten worden
  */
  @Input() public modify: boolean;

  /**
  * Dit is de boolean om te weten of de gebruiker mag veranderen
  */
  public _edit: boolean;

  constructor() {
    this.edit = false;
  }

  ngOnInit() {
  }

  /**
   * Setter editBoolean
   * @param {boolean} bool
   */
  set edit(bool: boolean) {
    this._edit = bool;
  }

  /**
   * Getter editBoolean
   * @return {boolean}
   */
  get edit() {
    return this._edit;
  }

  /**
   * Hier worden de wijzigingen opgeslagen via een form
   */
  saveDescription() {
    // SAVEN VIA FORM
    this.edit = false;
  }
}
