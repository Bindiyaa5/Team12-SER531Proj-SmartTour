import { Component, OnInit } from '@angular/core';
import { ontology } from './ontologies.interface';
import { FormsModule } from '@angular/forms';
import { User } from '../home/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  title = 'Smart Tour of Smithsonian American Art Museum';
  myImage:string = "assets/images/pic1.jpg";

  // public ontologies:Array<ontology> = [{id:1, name:'Artist'}, {id:2, name:'Artwork'}, {id:3, name:'Artist and Artwork'}];

  // public ontId: number =1;

  ontologies = ['Artist', 'Artwork' , 'Artist and Artwork'];
  userModel = new User('Who is Picasso' , 'default');
  selectHasError = true;
  validateSelect(value) {
    if(value === 'default') {
      this.selectHasError = true;
    }
    else{
      this.selectHasError = false;
    }
  }



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
