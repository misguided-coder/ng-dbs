import {Component} from "@angular/core";

@Component({
	selector:"app",
	template:`<div>
		<h1>{{title}}</h1>
		<h1 *ngIf="state">I live in Pune city!!!</h1>
		<h1 *ngIf="age > 20">Your are litte old!!!</h1>
		<h1 *ngIf="age > 20">Your are litte old!!!</h1>
		<h1 [hidden]="age > 20">I just passed 12th!!!</h1>
		<h2 *ngFor="let color of colors">
			Color is : {{color}}
		</h2>
	</div>`
})
export class InfoComponent {
	
	title:string = "It is all about directives";
	state:boolean = true;
	age:number = 34;

	colors:string[] = ['Red','Green','Blue','Yellow'];

}


