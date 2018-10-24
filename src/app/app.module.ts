import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LeerlingModule } from './modules/leerling/leerling.module';
import { RichtingModule } from './modules/richting/richting.module';
import {NgsRevealModule} from 'ng-scrollreveal';
<<<<<<< HEAD
import { RichtingOverzichtSchermComponent } from './components/richting-overzicht-scherm/richting-overzicht-scherm.component';
=======
import { HoofdcompetentieComponent } from './components/hoofdcompetentie/hoofdcompetentie.component';
>>>>>>> 75d4a067331a6b607c0b3b7ba5345dae8298c595

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
=======
    HoofdcompetentieComponent
>>>>>>> 75d4a067331a6b607c0b3b7ba5345dae8298c595
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    LeerlingModule,
    RichtingModule,
    NgsRevealModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
