import {ICalService} from "./cal.interface";

export class CalService implements ICalService {
	
	constructor(){
		console.log("Inside CarService constructor()!!!!!");
	}

	sum(valOne:number,valTwo:number) :number{
		console.log("Inside CarService sum()!!!!!");
		return valOne + valTwo;
	}

	diff(valOne:number,valTwo:number) :number {
		console.log("Inside CarService diff()!!!!!");
		return valOne - valTwo;
	}

	multiply(valOne:number,valTwo:number) :number {
		console.log("Inside CarService multiply()!!!!!");
		return valOne * valTwo;
	}

	divide(valOne:number,valTwo:number) :number {
		console.log("Inside CarService divide()!!!!!");
		return valOne / valTwo;
	}


} 