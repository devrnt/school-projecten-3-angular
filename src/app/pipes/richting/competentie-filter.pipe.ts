import { Pipe, PipeTransform } from '@angular/core';
import { Hoofdcompetentie, Modules } from 'src/app/models/hoofdcompetentie.model';

@Pipe({
    name: 'competentieFilter',
    // Haal dit uit commentaar als je wil dat bij elke verandering in de app de zoekfunctie opnieuw wordt uitgevoerd
    // pure: false
})
export class CompetentieFilterPipe implements PipeTransform {
    transform(competenties: Hoofdcompetentie[], filterDescription: string, filterModule: string): Hoofdcompetentie[] {
        const gefilterdeCompetenties = new Array<Hoofdcompetentie>();
        if ((!filterDescription || filterDescription.length === 0) && (!filterModule || filterModule.length === 0)) {
            return competenties;
        } else {
            gefilterdeCompetenties.concat(competenties.filter(comp => comp.module === filterModule));
        }
        competenties
            .forEach(comp => {
                if (
                    comp.description
                    && comp.description.toLowerCase().includes(filterDescription.toLowerCase().trim())
                    && comp.module === filterModule
                    ) {
                        if (!gefilterdeCompetenties.includes(comp)) {
                            gefilterdeCompetenties.push(comp);
                        }
                } else {
                    comp.deelcompetenties.forEach(deelcomp => {
                        if (
                            deelcomp.description.toLowerCase().includes(filterDescription.toLowerCase().trim())
                            && comp.module === filterModule
                            ) {
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
