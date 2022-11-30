import { Component, OnInit } from '@angular/core';
import { ontology } from './ontologies.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Smart Tour of Smithsonian American Art Museum';
  myImage:string = "assets/images/pic1.jpg";

  public ontologies:Array<ontology> = [{id:1, name:'Artist'}, {id:2, name:'Artwork'}, {id:3, name:'Artist and Artwork'}];

  public ontId: number =1;
  constructor(){

  }

  ngOnInit(){
      
  }
  displayVal = '';

  // data = [
  //   { id: 1, name: "Angular" },
  //   { id: 2, name: "React" },
  //   { id: 3, name: "Vue" },
  //   { id: 4, name: "Bootstrap" },
  //   { id: 5, name: "Foundation" },
  // ]

  // searchText = '';
  getValue(val:string)
  {
    console.warn(val)
    this.displayVal = val
  }
}


