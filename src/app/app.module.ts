import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LeerlingComponent } from './components/leerling/leerling.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {MatExpansionModule} from '@angular/material/expansion';
import { LeerlingService } from './services/leerling.service';

@NgModule({
  declarations: [
    AppComponent,
    LeerlingComponent
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
