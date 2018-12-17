import {Component,EventEmitter,Output,Input,OnInit} from "@angular/core";
import {Car} from "./car";

@Component({
	selector:"car-form",
	template:`<div>
		<h1>{{title}}</h1>
		<form *ngIf="car" name='carForm'>
			<label for='c_vin'>Enter Vin :</label> 
			<input readonly type=number [(ngModel)]='car.vin' name='c_vin' id='c_vin' /><br/>
			<label for='c_name'>Enter Model :</label> 
			<input type=text [(ngModel)]='car.model' name='c_name' id='c_name'  /><br/>
			<label for='c_makee'>Enter Make :</label> 
			<input type=text [(ngModel)]='car.make' name='c_make' id='c_make'  /><br/>
			<label for='c_price'>Enter Price :</label> 
			<input type=text [(ngModel)]='car.price' name='c_price' id='c_price' /><br/>
			<label for='c_color'>Enter Color :</label> 
			<input type=text [(ngModel)]='car.color' name='c_color' id='c_color'  /><br/>
			<input (click)='doAdd();' type=button value='Add Car' /><br/>
		</form>
		</div>`
})
export class CarFormComponent implements OnInit{
	
	title = "Car Entry Form";

	@Input()
	car:Car;  

	@Output()
	carAdded:EventEmitter<any> = new EventEmitter<any>(); 

	constructor(){
	}
	
	ngOnInit(){
		//this.car = new Car(1,'X5','BMW',820000.00,'Red','x1.png');
	}


	doAdd() {
		console.log("Inside CarDetailComponent doAdd()!!!!!");
		//Emit carAdded event here
		//alert(JSON.stringify(this.car));
		//alert(JSON.parse(JSON.stringify(this.car)));	
		this.carAdded.emit({NEWCAR:JSON.parse(JSON.stringify(this.car))});
	}

}


