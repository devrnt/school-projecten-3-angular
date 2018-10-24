import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LeerlingModule } from './modules/leerling/leerling.module';
import { RichtingModule } from './modules/richting/richting.module';
import {NgsRevealModule} from 'ng-scrollreveal';
import { HoofdcompetentieComponent } from './components/hoofdcompetentie/hoofdcompetentie.component';

@NgModule({
  declarations: [
    AppComponent,
    HoofdcompetentieComponent
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
