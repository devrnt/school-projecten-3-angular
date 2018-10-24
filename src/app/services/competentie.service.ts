import { Injectable } from '@angular/core';
import { Competentie } from '../models/competentie.model';

@Injectable({
  providedIn: 'root'
})
export class CompetentieService {

  private _hoofdcompetenties: Competentie[];
  constructor() {
    this._hoofdcompetenties = [
      new Competentie('hoofdcompetentie1', 'Ruimt de werkpost op en maakt hem schoon'),
      new Competentie('hoofdcompetentie2', 'Neemt deel aan de organisatie van het kapsalon'),
      new Competentie('hoofdcompetentie3', 'Bereidt de werkpost voor'),
      new Competentie('hoofdcompetentie4', 'Bereidt voor op de toe te passen technieken'),
      new Competentie('hoofdcompetentie5', 'Adviseert de klant'),
      new Competentie('hoofdcompetentie6', 'Toont het kapsel aan de klant')
    ];
  }

  public  get hoofdcompetenties(): Competentie[] {
    return this._hoofdcompetenties;
  }
}
