import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent{

  constructor() { }

  linkList = [
	{
		text: 'Projects',
		href: '/projects',
	},
	{
		text: 'Tech Stack',
		href: '/stack',
	},
	{
		text: 'Contact',
		href: '/contact',
	},
  ]

  links(){
	  return this.linkList;
  }

}
