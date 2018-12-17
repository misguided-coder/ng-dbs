import {Component,OnInit,OnDestroy} from "@angular/core";

@Component({
	selector:'news',
	template:`<div>
		<h1>{{title}}</h1>
		<div>{{summary}}</div>
		<a routerLink='/home'>Home</a>
		</div>`
})
export class NewsComponent implements OnInit,OnDestroy{
	title:string = "Breaking News";
	summary:string = "Today we will stay till 11 PM.";

	constructor(){
		console.log("Inside NewsComponent constructor!!!!");
	}

	 ngOnInit(){
		console.log("Inside NewsComponent ngOnInit!!!!");
	 }

	 ngOnDestroy(){
		console.log("Inside NewsComponent ngOnDestroy!!!!");
	 }
	 
}



