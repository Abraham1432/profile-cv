import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {


  stackMedic:string[] = ["Angular", "node.js", "Firebase", "Angular Material", "Google API Calendar"] 
  stackMedic2:string[] = ["Meteor", "node.js", "Mongo", "boostrap", "Digital Ocean"] 

  constructor() { }


  ngOnInit(): void {
  }

}
