import {Component} from "@angular/core";
import {Car} from "./car";

@Component({
	selector:"app",
	template:`<div>
		<h1>{{title}}</h1>
		<h2 *ngFor="let car of cars">
			Car is : {{car}}
		</h2>
	</div>`
})
export class CarListComponent {
	
	title:string = "Dream Cars";
	cars:Car[];

	constructor(){
		this.cars = [
			new Car(1000,'X1','BMW',120000.00,'Red','x1.png'),
			new Car(2000,'X6','BMW',892000.00,'Black','x6.png'),
			new Car(3000,'T4','BMW',3420000.00,'Yellow','t4.png'),
			new Car(4000,'A7','Audi',920000.00,'Red','a7.png'),
			new Car(5000,'Q5','Audi',720000.00,'White','q5.png'),
		];	

	}
		
}


