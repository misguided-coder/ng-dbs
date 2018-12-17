import {Component} from "@angular/core";

@Component({
	selector:'home',
	template:`
		<h1>{{title}}</h1>
		<div>{{summary}}</div>
	`
})
export class HomeComponent{
	title:string = "Home Page";
	summary:string = "Welcome to DBS";

	
	constructor(){
		console.log("Inside HomeComponent constructor!!!!");
	}
}



