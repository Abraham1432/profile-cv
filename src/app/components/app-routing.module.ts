import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

//components
import { AboutMeComponent } from "./about-me/about-me.component";
import { ProjectsComponent } from "./projects/projects.component";
import { SkillsComponent } from "./skills/skills.component";


const routes: Routes = [


    {path:"about-me",component: AboutMeComponent},
    {path:"projects",component: ProjectsComponent},
    {path:"skills",component: SkillsComponent},
    { path: '',   redirectTo: 'about-me', pathMatch: 'full' }, // redirect to `first-component`
    { path: '**', component: AboutMeComponent },  // Wildcard route for a 404 page

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
