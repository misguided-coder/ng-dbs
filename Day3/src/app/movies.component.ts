import {Component,OnInit} from "@angular/core";
import {ActivatedRoute} from '@angular/router';

@Component({
	selector:'news',
	template:`<div>
		<h1>{{title}}</h1>
		<div>ID : {{currentMovie.id}}</div>
		<div>Title : {{currentMovie.title}}</div>
		<div>Year : {{currentMovie.year}}</div>
		<a routerLink='/home'>Home</a>
		</div>`
})
export class MoviesComponent implements OnInit {

	title:string = "Movie Page";
	currentMovie:Movie;
	movies:Movie[] = [];
	
	constructor(private activatedRoute:ActivatedRoute){
		console.log("Inside MoviesComponent constructor!!!!");
		this.movies.push(new Movie(1000,'Bahubali',2014));
		this.movies.push(new Movie(2000,'Robot 2.0',2018));
	}

	ngOnInit(){
		console.log("Inside MoviesComponent ngOnInit!!!!");

		this.activatedRoute.params.subscribe((parms) => {
			let id = parseInt(parms['movieid']);
			for(let movie of this.movies){
					if(movie.id === id){
						this.currentMovie = movie;
						break;
					}

			}
		});
	}
}

class Movie {
	
	id:number;
	title:string;
	year:number;

	constructor(id,title,year){
		this.id = id;
		this.title = title;
		this.year = year;
	}
}



