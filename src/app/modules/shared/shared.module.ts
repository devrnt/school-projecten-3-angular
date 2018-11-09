import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoofdcompetentieComponent } from 'src/app/components/hoofdcompetentie/hoofdcompetentie.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeelcompetentieComponent } from 'src/app/components/hoofdcompetentie/deelcompetentie/deelcompetentie.component';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { DeelcompetentieToekennenComponent } from 'src/app/components/deelcompetentie-toekennen/deelcompetentie-toekennen.component';

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
    HoofdcompetentieComponent,
    DeelcompetentieComponent,
    DeelcompetentieToekennenComponent
  ],
  declarations: [
    HoofdcompetentieComponent,
    DeelcompetentieComponent,
    DeelcompetentieToekennenComponent
  ]
})
export class SharedModule { }
