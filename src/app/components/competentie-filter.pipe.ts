import { Pipe, PipeTransform } from '@angular/core';
import { Competentie } from '../models/competentie.model';

@Pipe({
  name: 'competentieFilter',
  //Haal dit uit commentaar als je wil dat bij elke verandering in de app de zoekfunctie opnieuw wordt uitgevoerd
  //pure: false 
})
export class CompetentieFilterPipe implements PipeTransform {
    transform(competenties: Competentie[], filterString: string): Competentie[] {
        let gefilterdeCompetenties = new Array<Competentie>();
        if (!filterString || filterString.length === 0) 
            return competenties;
    
        competenties
            .forEach(comp => {
                comp.deelcompetenties.forEach(deelcomp => {
                    if(comp.description 
                        && comp.description.toLowerCase().includes(filterString.toLowerCase().trim()) 
                        || deelcomp.description.toLowerCase().includes(filterString.toLowerCase().trim()))
                            if(!gefilterdeCompetenties.includes(comp))
                                gefilterdeCompetenties.push(comp);
                })
            })
        
        return gefilterdeCompetenties;
  }


}
