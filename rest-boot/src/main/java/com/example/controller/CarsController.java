package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dao.CarDAO;
import com.example.model.Car;

@RestController
@RequestMapping("/api")
public class CarsController {

	@Autowired
	CarDAO carDAO;
	
	@GetMapping("/home")
	public String homePage() {
		return "Luxury Cars!!!";
	}
		
	//Get all cars
	@GetMapping("/cars")
	@CrossOrigin
	public List<Car> getAllCars(){
		System.out.println("===================== getAllCars() ======================");
		return carDAO.selectAll();
	}
	
	//Get car by vin
	@GetMapping("/car/{vin}")
	public Car getCarsByVIN(@PathVariable("vin") int vin){
		System.out.println("===================== getCarsByVIN() ======================");
		return carDAO.selectByVin(vin);
	}
	
	//Add a new car 
	
	//Update a car 
	
	//Delete a car
	
	
}
