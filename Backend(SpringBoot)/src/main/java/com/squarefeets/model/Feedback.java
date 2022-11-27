package com.squarefeets.model;

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
@Table(name = "Feedback")
public @Data class Feedback {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "feedback_id")
	private int feedbackId;
	
	@Column(name = "rating")
	private int rating;
	
	@Column(name = "comments")
	private String comments;
	
	@ManyToOne
    @JoinColumn(name = "user_details_id")
    private User user;
	
	@ManyToOne
    @JoinColumn(name = "property_id")
    private Property property;

	public Feedback(int rating, String comments) {
		super();
		this.rating = rating;
		this.comments = comments;
	}
	
	
}
