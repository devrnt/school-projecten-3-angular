import { Injectable } from '@angular/core';
import { Competentie } from '../models/competentie.model';

@Injectable({
  providedIn: 'root'
})
export class CompetentieService {

  private _hoofdcompetenties: Competentie[];

  constructor() {
    let deelcompetenties1 = [
      new Competentie('deelcompetentie1', 'Houdt zich aan de richtlijnen voor hygiëne, veiligheid en ergonomie'),
      new Competentie('deelcompetentie2', 'Ruimt de gebruikte werkpost op na elke behandeling en reinigt deze'),
      new Competentie('deelcompetentie3', 'Reinigt het gebruikte materieel en ontsmet indien nodig'),
      new Competentie('deelcompetentie4', 'Sorteert afval volgens de richtlijnen')
    ];

    let deelcompetenties2 = [
      new Competentie('deelcompetentie1', 'Houdt zich aan de geldende regels van het kapsalon'),
      new Competentie('deelcompetentie2', 'Voert opdrachten uit volgens de werking van het kapsalon'),
      new Competentie('deelcompetentie3', 'Werkt samen in team')
    ];

    let deelcompetenties3 = [
      new Competentie('deelcompetentie1', 'Zorgt voor de orde en netheid van de werkpost'),
      new Competentie('deelcompetentie2', 'Controleert en zet het materieel klaar'),
      new Competentie('deelcompetentie3', 'Bereidt het te gebruiken materieel en producten eigen aan de activiteit voor')
    ];

    let deelcompetenties4 = [
      new Competentie('deelcompetentie1', 'Informeert zich over de verwachtingen van de klant'),
      new Competentie('deelcompetentie2', 'Luistert naar de wens en de eerdere ervaringen van de klant'),
      new Competentie('deelcompetentie3', 'Observeert de klant'),
      new Competentie('deelcompetentie4', 'Gaat na of er allergieën zijn'),
      new Competentie('deelcompetentie5', 'Stelt de juiste haar- en hoofdhuiddiagnose en stelt de kenmerken ervan vast'),
      new Competentie('deelcompetentie6', 'Bepaalt de te gebruiken techniek en producten'),
      new Competentie('deelcompetentie7', 'Past gebruiksaanwijzingen van het materieel en de producten toe')
    ];

    let deelcompetenties5 = [
      new Competentie('deelcompetentie1', 'Volgt de evoluties/trends in het vakgebied op'),
      new Competentie('deelcompetentie2', 'Houdt rekening met de morfologie, de wensen en de noden van de klant'),
      new Competentie('deelcompetentie3', 'Raadt de juiste behandeling aan in overleg met de klant'),
      new Competentie('deelcompetentie4', 'Doet een voorstel (snit, stijl, lengte, vorm, kleur) en spreekt de prijs af'),
      new Competentie('deelcompetentie5', 'Toont voorbeelden indien gewenst (kapselboeken, media en kleurenkaart)'),
      new Competentie('deelcompetentie6', 'Stelt in functie van de behandeling producten en accessoires voor, adviseert en verkoopt ze')
    ];

    let deelcompetenties6 = [
      new Competentie('deelcompetentie1', 'Toont het kapsel met behulp van een handspiegel'),
      new Competentie('deelcompetentie2', 'Informeert naar de tevredenheid van de klant'),
      new Competentie('deelcompetentie3', 'Werkt het kapsel bij indien nodig')
    ];
    
    this._hoofdcompetenties = [
      new Competentie('hoofdcompetentie1', 'Ruimt de werkpost op en maakt hem schoon', deelcompetenties1),
      new Competentie('hoofdcompetentie2', 'Neemt deel aan de organisatie van het kapsalon', deelcompetenties2),
      new Competentie('hoofdcompetentie3', 'Bereidt de werkpost voor', deelcompetenties3),
      new Competentie('hoofdcompetentie4', 'Bereidt voor op de toe te passen technieken', deelcompetenties4),
      new Competentie('hoofdcompetentie5', 'Adviseert de klant', deelcompetenties5),
      new Competentie('hoofdcompetentie6', 'Toont het kapsel aan de klant', deelcompetenties6)
    ];
  }

  public  get hoofdcompetenties(): Competentie[] {
    return this._hoofdcompetenties;
  }
}
