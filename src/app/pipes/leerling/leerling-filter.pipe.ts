import { Pipe, PipeTransform } from '@angular/core';
import { Leerling } from 'src/app/models/leerling.model';

@Pipe({
  name: 'leerlingFilter',
  pure: false
})
export class LeerlingFilterPipe implements PipeTransform {
  transform(richtingen: Leerling[], filterString: string): Leerling[] {
    if (!filterString || filterString.length === 0) {
      return richtingen;
    }
    return richtingen
        .filter(l =>
        l.achternaam.toLowerCase().includes(filterString.toLowerCase()) ||
        l.voornaam.toLowerCase().includes(filterString.toLowerCase()) ||
        filterString.toLowerCase().includes(l.voornaam.toLowerCase() + ' ' + l.achternaam.toLowerCase())
    );
  }
}
