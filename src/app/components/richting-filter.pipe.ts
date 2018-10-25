import { Pipe, PipeTransform } from '@angular/core';
import { Richting, Diploma } from '../models/richting';

@Pipe({
  name: 'richtingFilter',
  pure: false
})
export class RichtingFilterPipe implements PipeTransform {
  transform(richtingen: Richting[], filterString: string): Richting[] {
    if (!filterString || filterString.length === 0) {
      return richtingen;
    }
    return richtingen
        .filter(rich =>
          rich.naam && rich.naam.toLowerCase().includes(filterString.toLowerCase()) ||
          rich.diploma.toLowerCase() === filterString.toLowerCase()
    );
  }
}
