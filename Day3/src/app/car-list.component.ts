import {Component,OnInit} from "@angular/core";

import {Car} from "./car";

@Component({
	selector:"car-list",
	template:`<div class='container'>
		<div class='list'>
		<h1>{{title}}</h1>
		<table>
		<tbody>
			<tr *ngFor="let car of cars">
				<td>{{car.vin}}</td> 
				<td>{{car.make}}</td> 
				<td>{{car.model}}</td>
				<td>{{car.price}}</td>
				<td>{{car.color}}</td>
				<td>
					<img width=50 height=50 [src]="imagePath+car.logo" />
				</td>
				<td>
					<a (click)="doEdit(car);" href=#>Edit</a>
				</td>
			</tr>
		</tbody>
		</table>
		</div>
		<div class='form'>
			<car-form [car]="selectedCar"  (carAdded)='addCar($event);'></car-form>
		</div>
	</div>`,
	styles:[
		`
			.container {
				width:90%;
			}

			.container .list{
				float:left;
				width:50%;
				border:2px solid blue;
			}

			.container .form {
				float:right;
				width:40%;
				border:2px solid blue;
			}

		`
	]

})
export class CarListComponent {
	
	imagePath:string = "assets/images/"
	title:string = "Dream Cars";
	cars:Car[];

	selectedCar:Car;
 	
	constructor(){
		this.cars = [
			new Car(1000,'X1','BMW',120000.00,'Red','x1.png'),
			new Car(2000,'X6','BMW',892000.00,'Black','x6.png'),
			new Car(3000,'T4','BMW',3420000.00,'Yellow','t4.png'),
			new Car(4000,'A7','Audi',920000.00,'Red','a7.png'),
			new Car(5000,'Q5','Audi',720000.00,'White','q5.png'),
		];	

	}

	addCar(evt) {
		console.log("Inside CarListComponent addCar()!!!!!!");
		//20 loc
		//alert(evt.NEWCAR.vin);	
		this.cars.push(evt.NEWCAR);
	}

	doEdit(car) {
		console.log("Inside CarListComponent doEdit()!!!!!!");
		this.selectedCar = car;
		//alert(this.selectedCar.vin);
	}
		
}


