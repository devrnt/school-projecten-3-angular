import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoofdcompetentieComponent } from 'src/app/components/hoofdcompetentie/hoofdcompetentie.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DeelcompetentieComponent } from 'src/app/components/hoofdcompetentie/deelcompetentie/deelcompetentie.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  exports: [
    HoofdcompetentieComponent,
    DeelcompetentieComponent
  ],
  declarations: [
    HoofdcompetentieComponent,
    DeelcompetentieComponent
  ]
})
export class SharedModule { }
