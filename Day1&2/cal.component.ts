import {Component} from "@angular/core";

@Component({
	selector:"cal",
	template:`<div class='cal'>
		<h1>{{title}}</h1>
	</div>`,
	styles:[`

		.cal {
			background-color:blue;
		}	

	`]
})
export class CalComponent {
	
	title:string = "Simple Calculator";
	
	constructor() {
	}
}

