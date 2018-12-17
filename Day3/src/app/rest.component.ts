import { Component,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app',
  template: `<div>
    <h1> {{title}} </h1>
    <hr/>
    <div *ngFor="let car of backendData">
        <h1> Name : {{car.make}} {{car.model}} </h1>
    </div>
    </div>`,
})
export class RestComponent implements OnInit {

  title:string = 'Enjoy REST Calls to make remote calls to backend services';
  backendData:any;

  constructor(private http:HttpClient){
    console.log("Inside RestComponent constructor!!!!");
  }

  ngOnInit() {

    let observable = this.http.get('http://localhost:8080/luxurycars/api/cars');  
 
    observable.subscribe((data)=>{
        console.log("Received Data");
       this.backendData = data;
    });


  }
}
