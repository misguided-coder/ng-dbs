//ng imports
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

//application imports
import {CarListComponent} from "./car-list.component";
import {CarFormComponent} from "./car-form.component";

@NgModule({
	declarations:[
		CarListComponent,
		CarFormComponent
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