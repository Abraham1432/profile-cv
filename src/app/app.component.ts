import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  menu:string = "about";

  constructor(){

  }


  switchMenu(text:string){

    this.menu = text
  
  }
  


}
