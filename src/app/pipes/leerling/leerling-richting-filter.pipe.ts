import { Pipe, PipeTransform } from '@angular/core';
import { Leerling } from 'src/app/models/leerling.model';

@Pipe({
  name: 'leerlingRichtingFilter'
})
export class LeerlingRichtingFilterPipe implements PipeTransform {

  transform(leerlingen: Leerling[], filterRichting: string): Leerling[] {
    console.log(filterRichting);
    if (!filterRichting || filterRichting.length === 0 || filterRichting === '---')  {
      return leerlingen;
    }
    return leerlingen
        .filter(l => l.richting.naam.includes(filterRichting));
  }

}
