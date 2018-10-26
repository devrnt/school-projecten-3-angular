import { Pipe, PipeTransform } from '@angular/core';
import { Hoofdcompetentie } from '../models/hoofdcompetentie.model';

@Pipe({
    name: 'competentieFilter',
    // Haal dit uit commentaar als je wil dat bij elke verandering in de app de zoekfunctie opnieuw wordt uitgevoerd
    // pure: false
})
export class CompetentieFilterPipe implements PipeTransform {
    transform(competenties: Hoofdcompetentie[], filterString: string): Hoofdcompetentie[] {
        const gefilterdeCompetenties = new Array<Hoofdcompetentie>();
        if (!filterString || filterString.length === 0) {
            return competenties;
        }
        competenties
            .forEach(comp => {
                comp.deelcompetenties.forEach(deelcomp => {
                    if (comp.description
                        && comp.description.toLowerCase().includes(filterString.toLowerCase().trim())
                        || deelcomp.description.toLowerCase().includes(filterString.toLowerCase().trim())) {
                        if (!gefilterdeCompetenties.includes(comp)) {
                            gefilterdeCompetenties.push(comp);
                        }
                    }
                });
            });

        return gefilterdeCompetenties;
    }


}
