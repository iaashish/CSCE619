import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompenggComponent } from './computerengg/compengg.component';
import { GeneralComponent } from './general/general.component';
import { HomeComponent } from './homepage/home.component';
import { InfotechComponent } from './informationtech/infotech.component';
import { ScicompComponent } from './scientificcomputing/scicomp..component';
import { VideogameComponent } from './videogame/videogame.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from "@angular/forms";


const appRoutes: Routes =  [
    {
    path : '',
    component : AppComponent
  },
  {
    path : 'home',
    component : HomeComponent
  },
{
    path : 'general',
    component : GeneralComponent
  },
{
    path : 'infotech',
    component : InfotechComponent
  },

{
    path : 'compengg',
    component : CompenggComponent
  },
{
    path : 'scicomp',
    component : ScicompComponent
  },
{
    path : 'videogame',
    component : VideogameComponent
  }

];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GeneralComponent,
    InfotechComponent,
    CompenggComponent,
    ScicompComponent,
    VideogameComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
