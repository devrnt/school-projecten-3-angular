import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LeerlingComponent } from './components/leerling/leerling.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {MatExpansionModule} from '@angular/material/expansion';
import { LeerlingService } from './services/leerling.service';
import { RichtingComponent } from './components/richting/richting.component';
import { RichtingenViewComponent } from './components/richtingen-view/richtingen-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LeerlingComponent,
    RichtingComponent,
    RichtingenViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    MatExpansionModule
  ],
  providers: [ LeerlingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
