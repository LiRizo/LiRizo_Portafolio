import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { Projectsv1Component } from './components/projectsv1/projectsv1.component';
import { Projectsv2Component } from './components/projectsv2/projectsv2.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillComponent } from './components/skill/skill.component';
import { EducationComponent } from './components/education/education.component';
import { NavbarComponent } from './components/navbar/navbar.component';


const routes: Routes = [

{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aboutme', component: AboutMeComponent },
  { path: 'projects', component: Projectsv1Component },
  { path: 'projectsv2', component: Projectsv2Component },
  { path: 'contact', component: ContactComponent },
  { path: 'skill', component: SkillComponent },
  { path: 'education', component: EducationComponent },
  { path: 'navbar', component: NavbarComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

