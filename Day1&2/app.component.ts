import {Component} from "@angular/core";

@Component({
	selector:"app",
	template:`<div>
		<h1>{{title}}</h1>
		<hr/>	
		<person></person>	
		<hr>	
		<cal></cal>	
	</div>`
})
export class AppComponent {
	
	title:string = "DBS Banking App";
	
	constructor() {
	}
}

