import { Pipe, PipeTransform } from '@angular/core';
import { Hoofdcompetentie } from 'src/app/models/hoofdcompetentie.model';

@Pipe({
  name: 'competentieModuleFilter'
})
export class CompetentieModuleFilterPipe implements PipeTransform {

  transform(hoofdcompetentiess: Hoofdcompetentie[], filterModule: string): Hoofdcompetentie[] {
    if (!filterModule || filterModule.length === 0 || filterModule === '---') {
      return hoofdcompetentiess;
    }
    return hoofdcompetentiess
      .filter(hc => hc.module.includes(filterModule));
  }

}
