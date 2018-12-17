import {Component,Inject,OnInit,OnDestroy} from "@angular/core";
import {ICalService} from "./cal.interface";
import {JokeService} from "./joke.service";


@Component({
	//providers:[CalService],
	selector:"about",
	template:`<div>
		<h1>{{title}}</h1>
		<hr/>
		<h2>{{message}}</h2>
		<hr/>
		Enter Joke : <input type=text [(ngModel)]='joke' />
					<input type=button value='Add Joke' (click)='addJoke();' />
		
		</div>`
})
export class AboutComponent implements OnInit,OnDestroy{ 
	
	title = "Info Component";
	message:string;
	joke:string;

	subId:any;

	//only do provide here dependencies
	constructor(@Inject("ICalService") private calService:ICalService,private jokeService:JokeService){
		console.log("Inside AboutComponent constructor()!!!!!");
	}

	ngOnInit(){
		let self = this;

		this.subId = this.jokeService.joke.subscribe(function(data){		console.log("AboutComponent observer triggered!!!!");
			self.message = data;
		});
	}


	addJoke(){
		this.jokeService.add(this.joke);
	}


	ngOnDestroy(){
		this.subId.unsubscribe();
	}
}