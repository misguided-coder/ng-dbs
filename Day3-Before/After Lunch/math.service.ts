import {ICalService} from "./cal.interface";
import {LogService} from "./log.service";

export class MathService implements ICalService {

	logService = new LogService();
	
	//constructor(private logService:LogService){

	constructor() {
		console.log("Inside MathService constructor()!!!!!");
	}

	sum(valOne:number,valTwo:number) :number{
		this.logService.write("Inside MathService sum()!!!!!");
		return valOne + valTwo;
	}

	diff(valOne:number,valTwo:number) :number {
		this.logService.write("Inside MathService diff()!!!!!");
		return valOne - valTwo;
	}

	multiply(valOne:number,valTwo:number) :number {
		this.logService.write("Inside MathService multiply()!!!!!");
		return valOne * valTwo;
	}

	divide(valOne:number,valTwo:number) :number {
		this.logService.write("Inside MathService divide()!!!!!");
		return valOne / valTwo;
	}

} 