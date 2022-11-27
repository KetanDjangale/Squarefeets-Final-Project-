package com.squarefeets.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.squarefeets.model.Property;
import com.squarefeets.services.PropertyService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class PropertyController {

	@Autowired
	private PropertyService propertyService;
	
	//get all property handler
		@GetMapping("/property")
		public ResponseEntity<List<Property>> getProperty(){
			
			List<Property> propertyList = propertyService.getAllProperties();
			if(propertyList.size()<=0) {
				return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			}
			return ResponseEntity.status(HttpStatus.CREATED).body(propertyList);
		}
		
		//get single property handler
		@GetMapping("/property/{propertyId}")
		public ResponseEntity<Property> getProperty(@PathVariable("propertyId") int propertyId ) {
		
			Property property = propertyService.getPropertyById(propertyId);
			if(property == null) {
				return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			}
			return ResponseEntity.of(Optional.of(property));
		}
		
	//add property
	@PostMapping("/addProperty/builder")
	public ResponseEntity<Property>addProperty(@RequestBody Property property){
		Property prop = null;
		
		try {
			prop = this.propertyService.addProperty(property);
			System.out.println(property);
			return ResponseEntity.status(HttpStatus.CREATED).build();
		}
		catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		
		
	}
	
	
}
