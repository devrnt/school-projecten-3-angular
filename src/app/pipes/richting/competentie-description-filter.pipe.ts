import { Pipe, PipeTransform } from '@angular/core';
import { Hoofdcompetentie, Modules } from 'src/app/models/hoofdcompetentie.model';

@Pipe({
    name: 'competentieDescriptionFilter',
    // Haal dit uit commentaar als je wil dat bij elke verandering in de app de zoekfunctie opnieuw wordt uitgevoerd
    // pure: false
})
export class CompetentieDescriptionFilterPipe implements PipeTransform {
    transform(competenties: Hoofdcompetentie[], filterDescription: string): Hoofdcompetentie[] {
        const gefilterdeCompetenties = new Array<Hoofdcompetentie>();
        if (!filterDescription || filterDescription.length === 0) {
            return competenties;
        }
        competenties
            .forEach(comp => {
                if (
                    comp.description
                    && comp.description.toLowerCase().includes(filterDescription.toLowerCase().trim())
                    ) {
                        if (!gefilterdeCompetenties.includes(comp)) {
                            gefilterdeCompetenties.push(comp);
                        }
                } else {
                    comp.deelcompetenties.forEach(deelcomp => {
                        if (deelcomp.description.toLowerCase().includes(filterDescription.toLowerCase().trim())) {
                            if (!gefilterdeCompetenties.includes(comp)) {
                                gefilterdeCompetenties.push(comp);
                            }
                        }
                    });
                }
            });

        return gefilterdeCompetenties;
    }


}
