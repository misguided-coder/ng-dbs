import {Component,OnInit,OnDestroy} from "@angular/core";
import {Router} from '@angular/router';


@Component({
	selector:'weather',
	template:`<div>
		<h1>{{title}}</h1>
		<div>{{summary}}</div>
		<br/><br/>
		<input (click)='goToHome();' type=button value='Home' />
	</div>`
})
export class WeatherComponent  implements OnInit,OnDestroy {
	
	title:string = "Todays Weather";
	summary:string = "It is chill outside.";

	constructor(private router:Router){
		console.log("Inside WeatherComponent constructor!!!!");
	}

	 ngOnInit(){
		console.log("Inside WeatherComponent ngOnInit!!!!");
	 }

	 ngOnDestroy(){
		console.log("Inside WeatherComponent ngOnDestroy!!!!");
	 }

	 goToHome() {
	 	let id = 1000;
		console.log("Inside WeatherComponent goToHome!!!!");
		//20 loc
		//this.router.navigate(['/home']);
		//this.router.navigate(['/movie/2000']);
		this.router.navigate(['/movie',id]);
	 }

}



