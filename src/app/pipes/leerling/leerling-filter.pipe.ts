import { Pipe, PipeTransform } from '@angular/core';
import { Leerling } from 'src/app/models/leerling.model';

@Pipe({
  name: 'leerlingNaamFilter',
  pure: false
})
export class LeerlingNaamFilterPipe implements PipeTransform {
  transform(leerlingen: Leerling[], filterNaam: string): Leerling[] {
    if (!filterNaam || filterNaam.length === 0) {
      return leerlingen;
    }
    return leerlingen
        .filter(l =>
        l.achternaam.toLowerCase().includes(filterNaam.toLowerCase()) ||
        l.voornaam.toLowerCase().includes(filterNaam.toLowerCase()) ||
        filterNaam.toLowerCase().includes(l.voornaam.toLowerCase() + ' ' + l.achternaam.toLowerCase()) ||
        filterNaam.toLowerCase().includes(l.achternaam.toLowerCase() + ' ' + l.voornaam.toLowerCase())
    );
  }
}
