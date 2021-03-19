import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-component',
  templateUrl: './projects-component.component.html',
  styleUrls: ['./projects-component.component.css']
})
export class ProjectsComponentComponent implements OnInit {


	projects = [
		{
			class: 'portfolio-site',
			title: 'Portfolio Website',
			subtitle: 'Recursion Warning',
			description: `Full stack developer portfolio website written using Angular and Bootstrap`,
			link: './',
			stack: [
				{
					name: 'HTML5'
				},
				{
					name: 'Angular'
				},
				{
					name: 'CSS',
				},
				{
					name: 'Bootstrap',
				},
				{
					name: 'Typescript'
				}
			]
		},

		{
			class: 'regex-generator',
			title: 'Regex Generator',
			subtitle: 'Small Heroku app to generate regular expressions',
			description: `Written as a personal challenge to grasp ngForms in Angular and later
			to attempt to deploy an app to Heroku. The app can be viewed at https://regex-gen.herokuapp.com/
			when dynos are available`,
			link: 'https://github.com/iatenine/regex-generator',
			stack: [
				{
					name: 'Heroku'
				},
				{
					name: 'HTML5'
				},
				{
					name: 'Angular'
				},
				{
					name: 'CSS',
				},
				{
					name: 'Typescript'
				}
			]
		},

		{
			class: 'sd-app',
			title: 'Social Distancing App',
			subtitle: 'Bare Basics Social Distancing Alert for Android',
			description: `Developed early in the course of the pandemic as a warning system
			designed to play an alert tone when two devices running the app detect they were
			within 2 meters of one another without collecting any user data`,
			link: 'https://github.com/iatenine/Social-Distancing-App',
			stack: [
				{
					name: 'Java'
				},
				{
					name: 'Android'
				},
				{
					name: 'Git'
				},
			]
		},

		{
			class: 'praw-follow-notifier',
			title: 'PRAW Follow Notifier',
			subtitle: 'Tool to allow users to subscribe to updates in a thread of a Reddit post',
			description: `Created to address an inherent design challenge in a subreddit that
			utilized a 20-questions format, allowing more than 1 user to follow the clues as they
			were revealed to increase community engagement`,
			link: 'https://github.com/iatenine/PRAWFollowNotifier',
			stack: [
				{
					name: 'Python 3'
				},
				{
					name: 'PRAW'
				},
				{
					name: 'Reddit AutoModerator'
				},
			]
		},

		{
			class: 'simple-save',
			title: 'SimpleSave',
			subtitle: 'Godot script for saving/loading instances and SceneTrees easily',
			description: `Library of stateless functions that condenses the process of saving
			an instance or SceneTree plus all their children in their current state into a single 
			function call within the Godot Engine. Script can be used anywhere in the project
			without any autoload configuration`,
			link: 'https://github.com/iatenine/SimpleSave',
			stack: [
				{
					name: 'GdScript'
				},
				{
					name: 'Godot 3.x'
				},
			]
		},
	]

  constructor() { }

  ngOnInit(): void {
  }

  getProjects(){
	  return this.projects
  }

  hasProp(obj:object, name:string):boolean{
	  return obj.hasOwnProperty(name)
  }

}
