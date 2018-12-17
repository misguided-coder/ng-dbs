import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent }  from './app.component';
import {NewsComponent} from './news.component';
import {WeatherComponent} from './weather.component';
import {CricketComponent} from './cricket.component';
import {MoviesComponent} from './movies.component';
import {CarFormComponent} from "./car-form.component";
import {CarListComponent} from "./car-list.component";
import {RestComponent} from "./rest.component";

import {HomeComponent} from './home.component';

const config:Routes = [
	{
		path:'home',
		component:HomeComponent
	},
	{
		path:'news',
		component:NewsComponent
	},
	{
		path:'weather',
		component:WeatherComponent
	},	
	{
		path:'cricket',
		component:CricketComponent
	},
	{
		path:'movie/:movieid',
		component:MoviesComponent,
	},
	{
		path:'carlist',
		component:CarListComponent,
	},
	{
		path:'',
		redirectTo:'home',
		pathMatch:'full'
	}
];

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		RouterModule.forRoot(config)
	],
	  
	declarations: [ 
	  	AppComponent,
	  	NewsComponent,
	  	WeatherComponent,
	  	CricketComponent,
	  	MoviesComponent,
	  	CarListComponent,
	  	CarFormComponent,
	  	RestComponent,
	  	HomeComponent
	],
	 bootstrap: [ RestComponent ]
})
export class AppModule { }
