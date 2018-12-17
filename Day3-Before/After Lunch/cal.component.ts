import {Component,Inject} from "@angular/core";
import {ICalService} from "./cal.interface";
import {JokeService} from "./joke.service";


@Component({
	//providers:[CalService],
	selector:"cal",
	template:`<div>
		<h1>{{title}}</h1>
		<h2>{{currentJoke}}</h2>
		<hr/>
		<form>
			Enter Number : 
			<input type=number [(ngModel)]='valOne' name='valOne' /><br/>
			Enter Number : 
			<input type=number [(ngModel)]='valTwo' name='valTwo'  /><br/>
			<input (click)='doSum();' type=button value='SUM' /><br/>
			<input (click)='doDiff();' type=button value='DIFF' /><br/>
			<h1>Result : {{result}}</h1>
		</form>
		</div>`
})
export class CalComponent { 

	public title = "Simple Calculator";
	private valOne:number = 10;
	private valTwo:number = 10;
	private result:number;
	currentJoke:string;

	constructor(@Inject("ICalService") private calService:ICalService,private jokeService:JokeService){
		console.log("Inside CalComponent constructor()!!!!!");

		let self = this;

		this.jokeService.joke.subscribe(function(data){
			console.log("CalComponent observer triggered!!!!");
			self.currentJoke = data;
		});
	}

	//Event listener function
	doSum() {
		console.log("Inside CalComponent doSum()!!!!!");
		this.result = this.calService.sum(this.valOne,this.valTwo);
	}

	//Event listener function
	doDiff() {
		console.log("Inside CalComponent doDiff()!!!!!");
		this.result = this.calService.diff(this.valOne,this.valTwo);
	}

}


