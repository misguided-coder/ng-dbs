import {Component} from "@angular/core";

@Component({
	selector:'cricket',
	template:`<div>
		<h1>{{title}}</h1>
		<div>{{summary}}</div>
		<a routerLink='/home'>Home</a>
		</div>`
})
export class CricketComponent{
	title:string = "Cricket Match";
	summary:string = "20:20 final is on tomorrow!!";


	constructor(){
		console.log("Inside CricketComponent constructor!!!!");
	}
}



