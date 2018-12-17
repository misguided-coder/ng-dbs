export class Car {

	vin:number = 1000;
	model:string = "X5";
	make:string = "BMW";
	price:number = 7800000.00;
	color:string = "Black";
	logo:string = "path";

	constructor(vin,model,make,price,color,logo){
		this.vin = vin;
		this.model = model;
		this.make = make;
		this.price = price;
		this.color = color;
		this.logo = logo;
	}
}

