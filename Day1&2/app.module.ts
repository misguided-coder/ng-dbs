//ng imports
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

//application imports
import {HelloComponent} from "./hello.component";
//import {CarDetailComponent} from "./car-detail.component";
import {CityComponent} from "./city.component";
import {PersonComponent} from "./person.component";
import {CalComponent} from "./cal.component";
import {InfoComponent} from "./info.component";
import {CarListComponent} from "./car-list.component";
import {AppComponent} from "./app.component";


@NgModule({
	declarations:[
		AppComponent,
		CarListComponent,
		InfoComponent,
		PersonComponent,
		CalComponent,
		CityComponent,
		HelloComponent,
		//CarDetailComponent
	],
	imports:[
		BrowserModule,
		FormsModule
	],
	bootstrap:[CarListComponent]
})
export class AppModule {

	constructor() {
		console.log("Inside AppModule constructor()!!!!!");
	}	

}