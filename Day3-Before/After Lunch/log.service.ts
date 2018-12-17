import {Injectable} from "@angular/core";

/*@Injectable({
	providedIn:'root'
})*/
export class LogService  {
	
	constructor(){
		console.log("Inside LogService constructor()!!!!!");
	}

	write(message:any) {
		console.log("=============== LogService start ===============");
		console.log(message);
		console.log("=============== LogService end ===============");
	}

} 