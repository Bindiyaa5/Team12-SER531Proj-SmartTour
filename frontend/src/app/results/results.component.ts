import { Component, OnInit } from '@angular/core';
import ResultsJson from '../results.json'
import { WikiComponent } from '../wiki/wiki.component';
import {Router, RouterLink} from '@angular/router'


function renderCards(){
  for(var i = 0; i < ResultsJson.data.length; i++){

    
        var div1 = document.createElement('div');
        div1.className = 'card px-0';
        div1.style.margin = '0px';
        div1.style.padding = '0px';
        div1.style.marginLeft='150px';
        div1.style.marginTop = '50px';
        div1.style.width = '400px';
        div1.style.float = "left"

        var img1 = document.createElement('img')
        img1.className = 'card-img-top'
        img1.src = ResultsJson.data[i].imageLink
        div1.appendChild(img1)

        var div2 = document.createElement('div');
        div2.className = 'card-body';
        div1.appendChild(div2)

        var heading1 = document.createElement("h5")
        heading1.className = 'card-title'
        div2.appendChild(heading1)
        heading1.textContent = ResultsJson.data[i].artistName

        var para1 = document.createElement("p")
        para1.className = 'card-text'
        div2.appendChild(para1)
        para1.textContent = ResultsJson.data[i].biography


        
        // var a = document.createElement('a')
        

        var b = document.createElement("button")
        b.className = "btn"
        // b.[RouterLink] = "['../wiki/wiki.component']"
        b.style.backgroundColor = "#998574"
        b.style.color = "white"
        b.textContent = "More details"
        b.addEventListener("click", details)
        // b.onclick = function(i) { details }; 

      


        div2.appendChild(b)


        // div1.innerHTML = ResultsJson.data[i].birthDate;
        document.getElementsByTagName('body')[0].appendChild(div1);
  }
}

function details(i){

  // console.log("button clicked");
  // alert('Hello');

  // this.router.navigateByUrl('../wiki/wiki.component');

  // var div1 = document.createElement('div');
  //       div1.className = 'card px-0';
  //       div1.style.margin = '0px';
  //       div1.style.padding = '0px';
  //       div1.style.marginLeft='150px';
  //       div1.style.marginTop = '50px';
  //       div1.style.width = '400px';
  //       div1.style.float = "left"

        // var img1 = document.createElement('img')
        // img1.className = 'card-img-top'
        // img1.src = ResultsJson.data[i].imageLink
        // div1.appendChild(img1)

        // var div2 = document.createElement('div');
        // div2.className = 'card-body';
        // div1.appendChild(div2)

        // var heading1 = document.createElement("h5")
        // heading1.className = 'card-title'
        // div2.appendChild(heading1)
        // heading1.textContent = ResultsJson.data[i].artistName

  //       var birth = document.createElement("p")
  //       div2.appendChild(birth)
  //       birth.textContent = ResultsJson.data[i].birthDate

  //       var para1 = document.createElement("p")
  //       para1.className = 'card-text'
  //       div2.appendChild(para1)
  //       para1.textContent = ResultsJson.data[i].biography

}


interface QueryResults {

}

console.log(ResultsJson)

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  title = 'Smart Tour of Smithsonian American Art Museum';

  private Data= ResultsJson

  constructor() { }
  queryResults:any= ResultsJson;


  

  ngOnInit(): void {
    renderCards()
  }

}
