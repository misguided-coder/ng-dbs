//ng imports
import {Component} from "@angular/core";

//app imports
import {Car} from "./car";

@Component({
	selector:"app",
	template:`<div>
		<h1>{{title}}</h1>
		<h2>Name : {{car.make}} {{car.model}}</h2>
		<h2>Price : {{car.price}}</h2>
		<h2>Color : {{car.color}}</h2>
		<h2>Features : {{car.features[1]}}</h2>
		<h2>Today's Sale : {{5000*.40/2+10}}</h2>
		<img width=200 height=200 src="assets/images/a7.png" />
		<img width=200 height=200 [src]="imagePath+car.logo" />
		<img [width]="size.w" [height]="size.h" src="{{imagePath+car.logo}}" />
		<input (click)="sellCar();" type=button value="Sell Car" />
		<input (click)="sellCar(0.30);" type=button value="Sell Discounted Car" />
	</div>`
})
export class CarDetailComponent {
	
	title:string = "It is all about Luxury Cars";
	car:Car;
	imagePath = "assets/images/";
	size:any = {w:200,h:100};
	
	constructor() {
		console.log("Inside CarDetailComponent constructor()!!!!!");
		//this.car = new Car(101,"Audi","A1",1200000.00,"Red");

		//positional arguments
		this.car = new Car(101,"Audi","A1",1200000.00);
	}

	sayHello(){
		console.log("Hello to Everyone.....");
	}	
	
	sellCar(discount:number = 0.60) {
		console.log("Car sold..... in Rs "+this.car.price*discount);
	}	
}
