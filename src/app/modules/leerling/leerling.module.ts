import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeerlingService } from 'src/app/services/leerling.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LeerlingenViewComponent } from 'src/app/components/leerlingen-overzicht-scherm/leerlingen-view.component';
import { LeerlingComponent } from 'src/app/components/leerling/leerling.component';
import {
  MatExpansionModule,
  MatInputModule,
  MatListModule,
  MatDialogModule,
  MatButtonModule,
  MatSelectModule,
  MatToolbarModule,
  MatTabsModule
} from '@angular/material';
import { LeerlingNaamFilterPipe } from 'src/app/pipes/leerling/leerling-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeerlingConfirmDeleteComponent } from 'src/app/components/leerling/leerling-confirm-delete/leerling-confirm-delete.component';
import { LeerlingHoofdschermComponent } from 'src/app/components/leerling-hoofdscherm/leerling-hoofdscherm.component';
import { LeerlingRichtingFilterPipe } from 'src/app/pipes/leerling/leerling-richting-filter.pipe';
// tslint:disable-next-line:max-line-length
import { LeerlingCompetentiesToekennenComponent } from 'src/app/components/leerling-competenties-toekennen/leerling-competenties-toekennen.component';
// tslint:disable-next-line:max-line-length
import { LeerlingCompetentiesToekennenSchermComponent } from 'src/app/components/leerling-competenties-toekennen-scherm/leerling-competenties-toekennen-scherm.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    AngularFontAwesomeModule,
    MatToolbarModule,
    MatTabsModule
  ],
  exports: [
    LeerlingenViewComponent,
    LeerlingComponent,
    LeerlingConfirmDeleteComponent,
    LeerlingHoofdschermComponent,
    LeerlingCompetentiesToekennenComponent,
    LeerlingCompetentiesToekennenSchermComponent
  ],
  declarations: [
    LeerlingenViewComponent,
    LeerlingComponent,
    LeerlingConfirmDeleteComponent,
    LeerlingHoofdschermComponent,
    LeerlingCompetentiesToekennenComponent,
    LeerlingCompetentiesToekennenSchermComponent
  ],
  providers: [LeerlingService, LeerlingNaamFilterPipe, LeerlingRichtingFilterPipe],
  entryComponents: [LeerlingConfirmDeleteComponent]
})
export class LeerlingModule {}
