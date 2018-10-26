import { Injectable } from '@angular/core';
import { Hoofdcompetentie } from '../models/hoofdcompetentie.model';
import { Deelcompetentie } from '../models/deelcompetentie.model';
import { Icon, Kleur } from '../models/richting';

@Injectable({
  providedIn: 'root'
})
export class CompetentieService {

  private _hoofdcompetenties: Hoofdcompetentie[];

  constructor() {
    const deelcompetenties1 = [
      new Deelcompetentie('deelcompetentie1', 'Houdt zich aan de richtlijnen voor hygiëne, veiligheid en ergonomie'),
      new Deelcompetentie('deelcompetentie2', 'Ruimt de gebruikte werkpost op na elke behandeling en reinigt deze'),
      new Deelcompetentie('deelcompetentie3', 'Reinigt het gebruikte materieel en ontsmet indien nodig'),
      new Deelcompetentie('deelcompetentie4', 'Sorteert afval volgens de richtlijnen')
    ];

    const deelcompetenties2 = [
      new Deelcompetentie('deelcompetentie1', 'Houdt zich aan de geldende regels van het kapsalon'),
      new Deelcompetentie('deelcompetentie2', 'Voert opdrachten uit volgens de werking van het kapsalon'),
      new Deelcompetentie('deelcompetentie3', 'Werkt samen in team')
    ];

    const deelcompetenties3 = [
      new Deelcompetentie('deelcompetentie1', 'Zorgt voor de orde en netheid van de werkpost'),
      new Deelcompetentie('deelcompetentie2', 'Controleert en zet het materieel klaar'),
      new Deelcompetentie('deelcompetentie3', 'Bereidt het te gebruiken materieel en producten eigen aan de activiteit voor')
    ];

    const deelcompetenties4 = [
      new Deelcompetentie('deelcompetentie1', 'Informeert zich over de verwachtingen van de klant'),
      new Deelcompetentie('deelcompetentie2', 'Luistert naar de wens en de eerdere ervaringen van de klant'),
      new Deelcompetentie('deelcompetentie3', 'Observeert de klant'),
      new Deelcompetentie('deelcompetentie4', 'Gaat na of er allergieën zijn'),
      new Deelcompetentie('deelcompetentie5', 'Stelt de juiste haar- en hoofdhuiddiagnose en stelt de kenmerken ervan vast'),
      new Deelcompetentie('deelcompetentie6', 'Bepaalt de te gebruiken techniek en producten'),
      new Deelcompetentie('deelcompetentie7', 'Past gebruiksaanwijzingen van het materieel en de producten toe')
    ];

    const deelcompetenties5 = [
      new Deelcompetentie('deelcompetentie1', 'Volgt de evoluties/trends in het vakgebied op'),
      new Deelcompetentie('deelcompetentie2', 'Houdt rekening met de morfologie, de wensen en de noden van de klant'),
      new Deelcompetentie('deelcompetentie3', 'Raadt de juiste behandeling aan in overleg met de klant'),
      new Deelcompetentie('deelcompetentie4', 'Doet een voorstel (snit, stijl, lengte, vorm, kleur) en spreekt de prijs af'),
      new Deelcompetentie('deelcompetentie5', 'Toont voorbeelden indien gewenst (kapselboeken, media en kleurenkaart)'),
      new Deelcompetentie('deelcompetentie6', 'Stelt in functie van de behandeling producten en accessoires voor, adviseert en verkoopt ze')
    ];

    const deelcompetenties6 = [
      new Deelcompetentie('deelcompetentie1', 'Toont het kapsel met behulp van een handspiegel'),
      new Deelcompetentie('deelcompetentie2', 'Informeert naar de tevredenheid van de klant'),
      new Deelcompetentie('deelcompetentie3', 'Werkt het kapsel bij indien nodig')
    ];

    this._hoofdcompetenties = [
      new Hoofdcompetentie('hoofdcompetentie1', 'Ruimt de werkpost op en maakt hem schoon', deelcompetenties1, Icon.scissors, Kleur.red),
      new Hoofdcompetentie('hoofdcompetentie2', 'Neemt deel aan de organisatie van het kapsalon',
       deelcompetenties2, Icon.scissors, Kleur.red),
      new Hoofdcompetentie('hoofdcompetentie3', 'Bereidt de werkpost voor', deelcompetenties3, Icon.scissors, Kleur.red),
      new Hoofdcompetentie('hoofdcompetentie4', 'Bereidt voor op de toe te passen technieken', deelcompetenties4, Icon.scissors, Kleur.red),
      new Hoofdcompetentie('hoofdcompetentie5', 'Adviseert de klant', deelcompetenties5, Icon.scissors, Kleur.red),
      new Hoofdcompetentie('hoofdcompetentie6', 'Toont het kapsel aan de klant', deelcompetenties6, Icon.scissors, Kleur.red)
    ];
  }

  public  get hoofdcompetenties(): Hoofdcompetentie[] {
    return this._hoofdcompetenties;
  }
}
