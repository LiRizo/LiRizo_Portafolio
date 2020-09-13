import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { Projectsv1Component } from './components/projectsv1/projectsv1.component';
import { Projectsv2Component } from './components/projectsv2/projectsv2.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillComponent } from './components/skill/skill.component';
import { EducationComponent } from './components/education/education.component';

import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';

import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    Projectsv1Component,
    Projectsv2Component,
    ContactComponent,
    SkillComponent,
    EducationComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCollapseModule,
    NgbModule,
    MatListModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatListModule,

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
