import {Component} from "@angular/core";

@Component({
	selector:"person",
	template:`<div class='person'>
		<h1>{{title}}</h1>
	</div>`,
	styles:[`

		.person {
			background-color:yellow;
		}	

	`]
})
export class PersonComponent {
	
	title:string = "Person Details"
	
	constructor() {
	}
}

