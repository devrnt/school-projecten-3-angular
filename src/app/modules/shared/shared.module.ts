import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoofdcompetentieCardComponent } from 'src/app/components/hoofdcompetentie-card/hoofdcompetentie-card.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeelcompetentieComponent } from 'src/app/components/deelcompetentie/deelcompetentie.component';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
// tslint:disable-next-line:max-line-length
import { DeelcompetentieToekennenComponent } from 'src/app/components/leerling-hoofdscherm/leerling-competenties-toekennen-scherm/leerling-competenties-toekennen/deelcompetentie-toekennen/deelcompetentie-toekennen.component';
// import { DeelcompetentieToekennenComponent } from 'src/app/components/deelcompetentie-toekennen/deelcompetentie-toekennen.component';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    HoofdcompetentieCardComponent,
    DeelcompetentieComponent,
    DeelcompetentieToekennenComponent
  ],
  declarations: [
    HoofdcompetentieCardComponent,
    DeelcompetentieComponent,
    DeelcompetentieToekennenComponent
  ]
})
export class SharedModule { }
