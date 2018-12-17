import {Observable,BehaviorSubject} from "rxjs";

export class JokeService {
	
	dataSource = new BehaviorSubject<string>("Time for party");
	
	joke:Observable<string> =  this.dataSource.asObservable();

	add(newJoke:string) {
		console.log("Inside JokeService add()");
		this.dataSource.next(newJoke);
	}

}