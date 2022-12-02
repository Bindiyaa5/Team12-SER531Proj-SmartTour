import { Component, OnInit } from '@angular/core';
import { ontology } from './ontologies.interface';
import { FormsModule } from '@angular/forms';
import { User } from '../home/user';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  title = 'Smart Tour of Smithsonian American Art Museum';
  myImage:string = "assets/images/pic1.jpg";

  // public ontologies:Array<ontology> = [{id:1, name:'Artist'}, {id:2, name:'Artwork'}, {id:3, name:'Artist and Artwork'}];

  // public ontId: number =1;

  ontologies = ['Artist', 'Artwork' , 'Artist and Artwork'];
  userModel = new User('Who is Picasso' , 'default');
  selectHasError = true;

  constructor(private _enrollmentService: EnrollmentService){}

  

  validateSelect(value) {
    if(value === 'default') {
      this.selectHasError = true;
    }
    else{
      this.selectHasError = false;
    }
  }

  onSubmit() {
    console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel).subscribe(data => console.log("Succes!" , data), error => console.error("Error!" , error) )
  }



  // constructor(){

  // }

  // ngOnInit(){
      
  // }
  // displayVal = '';

  // getValue(val:string)
  // {
  //   console.warn(val)
  //   this.displayVal = val
  // }
}
