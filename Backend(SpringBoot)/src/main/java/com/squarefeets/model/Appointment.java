package com.squarefeets.model;


import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Table(name = "Appointment")
public @Data class Appointment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "app_id")
	private int appId;
	
	@Column(name = "date_time")
	private LocalDateTime dateTime;
	
	@Column(name = "appointment_status")
	private String appointmentStatus;
	
	@ManyToOne
    @JoinColumn(name = "user_details_id")
    private User user;
	
	@ManyToOne
    @JoinColumn(name = "property_id")
    private Property property;

	public Appointment(LocalDateTime dateTime, String appointmentStatus) {
		super();
		this.dateTime = dateTime;
		this.appointmentStatus = appointmentStatus;
	}
	
	
	
}
