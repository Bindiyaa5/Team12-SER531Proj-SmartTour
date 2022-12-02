import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  myImage:string = "assets/images/pic4.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
