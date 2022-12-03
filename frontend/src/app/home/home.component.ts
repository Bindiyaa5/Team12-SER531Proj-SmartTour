import { Component, OnInit } from '@angular/core';
import { ontology } from './ontologies.interface';
import { FormsModule } from '@angular/forms';
import { User } from '../user';
import { EnrollmentService } from '../enrollment.service';
import { SaamService } from '../saam.service';
// import ResultsJson from '../results.json'

// interface RESULTS {
//   artistId:Number;
//   artistName:String;
//   nationalityId:Number;
//   deathDate:String;
//   birthDate:String;
//   biography: String;
//   imageLink: String;
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  title = 'Smart Tour of Smithsonian American Art Museum';
  myImage:string = "assets/images/pic1.jpg";

  // private Data= ResultsJson
  // constructor() { }

  // public ontologies:Array<ontology> = [{id:1, name:'Artist'}, {id:2, name:'Artwork'}, {id:3, name:'Artist and Artwork'}];

  // public ontId: number =1;

  // Results: RESULTS [] = ResultsJson;

  // constructor(){
  //   console.log(this.Results)
  // }

  ontologies = ['Artist', 'Artwork' , 'Artist and Artwork'];
  userModel = new User('Who is Picasso' , 'default');
  selectHasError = true;

  constructor(private _enrollmentService: EnrollmentService, private service: SaamService){}

  

  validateSelect(value) {
    if(value === 'default') {
      this.selectHasError = true;
    }
    else{
      this.selectHasError = false;
    }
  }

  onSubmit() {
    // console.log(this.userModel);
    // this._enrollmentService.enroll(this.userModel).subscribe(data => console.log("Succes!" , data), error => console.error("Error!" , error) )
    alert("method works");
    if(this.userModel.select=="Artist")
     this.service.getArtistResult(this.userModel.search).subscribe(data=>{
      console.log(data);
      this.response=data;
      console.log(this.response.data[0]);
      console.log("response: "+this.response.get(0).artistId);
    });
    else if(this.userModel.select=="Artwork")
     this.service.getArtWorkResult(this.userModel.search).subscribe(data=>console.log(data));  
    //console.log(this.userModel);
    //this._enrollmentService.enroll(this.userModel).subscribe(data => console.log("Succes!" , data), error => console.error("Error!" , error) )
  }



  // constructor(){

  // }

  ngOnInit(){
      
  }

  // queryResults:any= ResultsJson;
  // displayVal = '';

  // getValue(val:string)
  // {
  //   console.warn(val)
  //   this.displayVal = val
  // }
}
