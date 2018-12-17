//ng imports
import {Component} from "@angular/core";

@Component({
	selector:"app",
	template:`<div>
		<h1>{{title}}</h1>
		Enter City : <input type=text [(ngModel)]="city" />	
		<input (click)="doCheck();" type=button value="Check" />	

		<input (click)="doChange();" type=button value="Change City" />

		<h1>Current City Value : {{city}}</h1>
		<h1>Current City Value : {{city}}</h1>
		<h1>Current City Value : {{city}}</h1>
		<h1>Current City Value : {{city}}</h1>
		<h1>Current City Value : {{city}}</h1>
		<h1>Current City Value : {{city}}</h1>
		<h1>Current City Value : {{city}}</h1>
	</div>`
})
export class CityComponent {
	
	title:string = "City Details";
	city = "Pune";

	constructor() {
		console.log("Inside CityComponent constructor()!!!!!");

		var self = this;
			
		setTimeout(function(){
			console.log("Reached timer!!!!");
			self.city = "Dubai";
		},5000);
	}

	doCheck() {
		console.log("City Name : "+this.city);
	}

	doChange() {
		this.city = "Hyderabad";
	}

}
