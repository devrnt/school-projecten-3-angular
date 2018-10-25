import { Pipe, PipeTransform } from '@angular/core';
import { Competentie } from '../models/competentie.model';

@Pipe({
  name: 'competentieFilter',
  pure: false //Dit is om bij elke verandering in de code, de zoekfuntie aan te passen
})
export class CompetentieFilterPipe implements PipeTransform {
    transform(competenties: Competentie[], filterString: string): Competentie[] {
    const bestaatDescription = comp => comp.description;
    const filterOpDescription = filterString => comp => 
        comp.description.toLowerCase().includes(filterString.toLowerCase());
    const filerOpDescriptionDeelcomp = filterString => comp => 
        comp.deelcompetenties.forEach(el => el.description.toLowerCase().includes(filterString.toLowerCase())); 
    
    // let competentiesGefilterdOpDeelcompetenties = [];
    // competenties.forEach(comp => 
    //     comp.deelcompetenties.forEach(deelcomp => 
    //         deelcomp.description.toLowerCase().includes(filterString.toLowerCase())?competentiesGefilterdOpDeelcompetenties.push(comp):''));

    if (!filterString || filterString.length === 0) {
      return competenties;
    }
    return competenties
        .filter(bestaatDescription && filterOpDescription(filterString) || filerOpDescriptionDeelcomp(filterString));

  }


}
