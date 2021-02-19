import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.css']
})
export class PageViewComponent implements OnInit {

	pageContents = `Full Stack Developer\n
	Specializing in Angular, Typescript`;

	stackContents = `stackContents will need to be replaced with a component`


  constructor() { }

  ngOnInit(): void {
  }

}
