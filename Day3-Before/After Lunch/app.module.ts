//ng imports
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";


//application imports
import {AppComponent} from "./app.component";
import {CalComponent} from "./cal.component";
import {AboutComponent} from "./about.component";
import {CoolComponent} from "./cool.component";

import {CalService} from "./cal.service";
import {MathService} from "./math.service";
import {JokeService} from "./joke.service";


//import {LogService} from "./log.service";

import {ICalService} from "./cal.interface";


@NgModule({
	//providers:[CalService],
	providers:[
		JokeService,
		//LogService,
		{provide:'ICalServiceOld',useClass: CalService},
		{provide:'ICalService',useClass: MathService}
	],
	declarations:[
		AppComponent,
		CalComponent,
		AboutComponent,
		CoolComponent
	],
	imports:[
		BrowserModule,
		FormsModule
	],
	bootstrap:[AppComponent]
})
export class AppModule {

	constructor() {
		console.log("Inside AppModule constructor()!!!!!");
	}	

}