import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { AboutMeComponent } from "./about-me/about-me.component";
import { ProjectsComponent } from "./projects/projects.component";
import { SkillsComponent } from "./skills/skills.component";

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AboutMeComponent,
    ProjectsComponent,
    SkillsComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ComponentsModule { }
