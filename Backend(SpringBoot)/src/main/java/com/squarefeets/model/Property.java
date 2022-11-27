package com.squarefeets.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Table(name = "Property")
public class Property implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "property_id")
	private int propertyId;
	
	@Column(name = "property_name")
	private String propertyName;
	
	@Column(name = "details")
	private String details;
	
	@Column(name = "price")
	private int price;
	
	@Column(name = "construction_status")
	private String constructionStatus;
	
	@Column(name = "RERA_reg")
	private String reraReg;
	
	@Column(name = "area")
	private String area;
	
	@Column(name = "rooms")
	private String rooms;
	
	@ManyToOne
    @JoinColumn(name = "address_id")
    private Address address;
    
    @ManyToOne
    @JoinColumn(name = "id")
    private User user;
    
    
    @ManyToOne(cascade = CascadeType.MERGE, fetch= FetchType.EAGER)
    @JoinColumn(name = "property_type_id")
    private Property_Type propertyType;
    
	/*
	@OneToMany(mappedBy = "property_id", cascade = CascadeType.ALL)
    List<Property> property;
    
    @OneToMany(mappedBy = "property_id", cascade = CascadeType.ALL)
    List<Feedback> property_id;
    
    
    @OneToMany(mappedBy = "property_id", cascade = CascadeType.ALL)
    List<Payment_Gateway> paymentGateway;
    
    
    @OneToMany(mappedBy = "property_id", cascade = CascadeType.ALL)
    List<Property_Images> propertyImages;
    */
    
    
    
    
    

	public Property(String propertyName, String details, int price, String constructionStatus, String reraReg,
			String area, String rooms) {
		super();
		this.propertyName = propertyName;
		this.details = details;
		this.price = price;
		this.constructionStatus = constructionStatus;
		this.reraReg = reraReg;
		this.area = area;
		this.rooms = rooms;
	}

	public int getPropertyId() {
		return propertyId;
	}

	public void setPropertyId(int propertyId) {
		this.propertyId = propertyId;
	}

	public String getPropertyName() {
		return propertyName;
	}

	public void setPropertyName(String propertyName) {
		this.propertyName = propertyName;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getConstructionStatus() {
		return constructionStatus;
	}

	public void setConstructionStatus(String constructionStatus) {
		this.constructionStatus = constructionStatus;
	}

	public String getReraReg() {
		return reraReg;
	}

	public void setReraReg(String reraReg) {
		this.reraReg = reraReg;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getRooms() {
		return rooms;
	}

	public void setRooms(String rooms) {
		this.rooms = rooms;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	@JsonBackReference
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Property_Type getPropertyType() {
		return propertyType;
	}

	public void setPropertyType(Property_Type propertyType) {
		this.propertyType = propertyType;
	}
    
    
}
