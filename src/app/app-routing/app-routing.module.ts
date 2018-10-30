import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LeerlingHoofdschermComponent } from '../components/leerling-hoofdscherm/leerling-hoofdscherm.component';
import { RichtingHoofdschermComponent } from '../components/richting-hoofdscherm/richting-hoofdscherm.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: 'leerlingen', component: LeerlingHoofdschermComponent },
    { path: 'richtingen', component: RichtingHoofdschermComponent },
    { path: '', redirectTo: 'leerlingen', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
