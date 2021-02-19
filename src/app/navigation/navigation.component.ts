import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  linkList = [
	{
		text: 'Projects',
		href: '#projects',
	},
	{
		text: 'Tech Stack',
		href: '#stack',
	},
	{
		text: 'Contact',
		href: '#contact',
	},
  ]
  ngOnInit(): void {
        if (window.location.hash) {
            window.location.hash;
        } else {
            window.location.hash = '#projects';
        };
  }

  links(){
	  return this.linkList;
  }

}
