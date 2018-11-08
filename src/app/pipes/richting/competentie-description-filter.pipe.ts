import { Pipe, PipeTransform } from '@angular/core';
import { Hoofdcompetentie, Modules } from 'src/app/models/hoofdcompetentie.model';

@Pipe({
    name: 'competentieFilter',
    // Haal dit uit commentaar als je wil dat bij elke verandering in de app de zoekfunctie opnieuw wordt uitgevoerd
    // pure: false
})
export class CompetentieFilterPipe implements PipeTransform {
    transform(competenties: Hoofdcompetentie[], filterDescription: string, filterModule: string): Hoofdcompetentie[] {
        if (filterDescription && filterDescription.length > 0) {
            competenties = competenties
            .filter(c => (c.description !== undefined && c.description.toLowerCase()
                .includes(filterDescription.toLowerCase().trim()))
                || (c.deelcompetenties.some(dc => dc.description.toLowerCase().includes(filterDescription.toLocaleLowerCase().trim())))
            );
        }
        if (filterModule && filterModule.length > 0 && filterModule !== '---') {
            competenties = competenties
            .filter(hc => hc.module.includes(filterModule));
        }
        return competenties;
    }


}
