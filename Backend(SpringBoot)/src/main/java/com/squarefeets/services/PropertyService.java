package com.squarefeets.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.squarefeets.model.Property;
import com.squarefeets.repository.PropertyRepository;

@Component
@Service
public class PropertyService {
	
	@Autowired
	private PropertyRepository propertyRepository;
	

	//add property
	public Property addProperty(Property prop) {
			
			Property result = (Property) propertyRepository.save(prop);
			return result;
		}

	//get all Property
		public List<Property> getAllProperties() {
			// TODO Auto-generated method stub
			List<Property> propertylist = (List<Property>)this.propertyRepository.findAll();
			return propertylist;
		}

		//get Property by Id
		public Property getPropertyById(int propertyId) {
			// TODO Auto-generated method stub
			Property property = null;
			try {
				property = this.propertyRepository.findById(propertyId);
			}catch (Exception e) {
				e.printStackTrace();
			}
			return property;
		}
		
		
	
}
