import {Component} from "@angular/core";

@Component({
	selector:"app",
	//template:"<h2>Hello Cool Component</h2>"
	template:"<h2>{{title}}</h2>"
})
export class HelloComponent {
	
	title = "Very Cool Component";
			
	constructor() {
		console.log("Inside HelloComponent constructor()!!!!!");
	}

	sayHello(){
		console.log("Hello to Everyone.....");
	}	
}