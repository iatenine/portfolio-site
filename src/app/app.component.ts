import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  
	constructor(private elementRef: ElementRef){

	}

	title = 'Jack Linhart, Developer Extraordinaire';

	//WWWWWWWHHHHYYYYYYYY!!!!!!
  	ngAfterViewInit(){
		  //Even your mom looks pretty next to javascript
		  this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 
		  'rgb(45, 45, 45)'
  	}
}
