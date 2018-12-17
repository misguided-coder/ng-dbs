import {Component,OnChanges,SimpleChanges,Input,OnInit,DoCheck,OnDestroy} from "@angular/core";


@Component({
	selector:"cool",
	template:`<div>
		<h1>{{title}}</h1>
		<h2>{{message}}</h2>
	</div>`
})
export class CoolComponent implements OnChanges,OnInit,DoCheck,OnDestroy{ 
	
	title = "Cool Component";
	
	@Input()
	message:string = "Default data in child";

	constructor(){
		console.log("Inside CoolComponent constructor()!!!!!");
		console.log(this.message);
		this.message = "Data from constructor";
	}

	ngOnChanges(changes:SimpleChanges){
		console.log("Inside CoolComponent ngOnChanges()!!!!!");
		//console.log(changes);
		/*for(let key in changes){
			console.log(key);
		}*/
		
		//let value:SimpleChange = changes.message;
		//console.log(value.previousValue);
		//console.log(value.currentValue);

		console.log(this.message);
	}

	ngOnInit(){
		console.log("Inside CoolComponent ngOnInit()!!!!!");
	}


	ngDoCheck(){
		console.log("Inside CoolComponent ngDoCheck()!!!!!");
	}

	ngOnDestroy(){
		console.log("Inside CoolComponent ngOnDestroy()!!!!!");
	}

}