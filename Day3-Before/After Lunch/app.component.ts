import {Component} from "@angular/core";
import {CalService} from "./cal.service";

@Component({
	selector:"app",
	template:`<div>
		<h1>{{title}}</h1>
		<cool [message]='data'></cool>
	</div>`
})
export class AppComponent { 
	
	title = "DBS App";
	data = "Data from Parent";

	constructor(){
		console.log("Inside AppComponent constructor()");
	}

}