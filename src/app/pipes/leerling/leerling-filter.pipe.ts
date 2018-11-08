import { Pipe, PipeTransform } from '@angular/core';
import { Leerling } from 'src/app/models/leerling.model';

@Pipe({
  name: 'leerlingFilter',
  pure: false
})
export class LeerlingFilterPipe implements PipeTransform {
  transform(leerlingen: Leerling[], filterNaam: string, filterRichting: string): Leerling[] {
    if (filterNaam && filterNaam.length > 0) {
      leerlingen = leerlingen
        .filter(l =>
        l.achternaam.toLowerCase().includes(filterNaam.toLowerCase()) ||
        l.voornaam.toLowerCase().includes(filterNaam.toLowerCase()) ||
        filterNaam.toLowerCase().includes(l.voornaam.toLowerCase() + ' ' + l.achternaam.toLowerCase()) ||
        filterNaam.toLowerCase().includes(l.achternaam.toLowerCase() + ' ' + l.voornaam.toLowerCase())
        );
    }
     if (filterRichting && filterRichting.length > 0 && filterRichting !== '---') {
       leerlingen = leerlingen.filter( l => l.richting.naam === filterRichting);
     }
     return leerlingen;
  }
}
