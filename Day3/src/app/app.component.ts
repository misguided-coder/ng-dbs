import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<div>
    <h1> {{title}} </h1>
    <hr/>
    <nav>
    	<ul>
    		<li><a routerLink='cricket'>Cricket</a></li>
    		<li><a routerLink='news'>News</a></li>
    		<li><a routerLink='weather'>Weather</a></li>
        <li><a routerLink='carlist'>CarList</a></li>
        <li><a routerLink='movie/1000'>Movie 1</a></li>
        <li><a routerLink='movie/2000'>Movie 2</a></li>
        <li><a routerLink=''>Movies</a></li>
    		<li><a routerLink=''>Songs</a></li>
    	</ul>
    </nav>
    <router-outlet></router-outlet>
  	</div>`,
  	styles:[`

		ul { background-color:black }

		ul li { 
			display: inline;
			color:white;
		}

		ul li a { 
			color:white;
			margin-right:20px;
			text-decoration:none;
		}

  		
  	`]

})
export class AppComponent {

  title:string = 'Enjoy Routing';

  constructor(){
    console.log("Inside AppComponent constructor!!!!");
  }
}
