import { Component, OnInit } from '@angular/core';
import ResultsJson from '../results.json'


// <div class="card px-0"  >
//       <img class="card-img-top" src="pic3.jpg" alt="Card image cap">
//       <div class="card-body">
//         <h5 class="card-title">{{item.value[0].artistName}}</h5>
//         <p class="card-text">{{item.value[0].biography}}</p>
//         <a href="#" class="btn btn-primary">More details</a>
//       </div>
//     </div>


// function renderCards(){
//   for(var i = 0; i < ResultsJson.data.length; i++){
//         var div1 = document.createElement('div');
//         div1.className = 'card px-0';
//         div1.style.margin = '0px';
//         div1.style.padding = '0px';
//         div1.style.marginLeft='210px';
//         div1.style.marginTop = '50px';
//         div1.style.width = '400px';

//         var img1 = document.createElement('img')
//         img1.className = 'card-img-top'
//         img1.src = ResultsJson.data[i].imageLink
//         div1.appendChild(img1)

//         var div2 = document.createElement('div');
//         div2.className = 'card-body';
//         div1.appendChild(div2)

//         var heading1 = document.createElement("h5")
//         heading1.className = 'card-title'
//         div2.appendChild(heading1)
//         heading1.textContent = ResultsJson.data[i].artistName

//         var para1 = document.createElement("p")
//         para1.className = 'card-text'
//         div2.appendChild(para1)
//         para1.textContent = ResultsJson.data[i].biography

//         var a1 = document.createElement("a")
//         a1.href = "#"
//         a1.textContent = "More details"
//         a1.className ="btn btn-primary"
//         div2.appendChild(a1)
//         document.getElementsByTagName('body')[0].appendChild(div1);
//   }
// }

// interface QueryResults {

// }
// console.log(ResultsJson)

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  title = 'Smart Tour of Smithsonian American Art Museum';
  myImage:string = "assets/images/pic4.jpg";
  // private Data= ResultsJson

  constructor() { }
  // queryResults:any= ResultsJson;

 

  ngOnInit(): void {

    // renderCards()


  }

  



}
