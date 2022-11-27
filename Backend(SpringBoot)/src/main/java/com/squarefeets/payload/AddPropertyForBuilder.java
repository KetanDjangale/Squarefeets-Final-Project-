package com.squarefeets.payload;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
public @Data class AddPropertyForBuilder {

	@NotBlank
    @Size(min = 3, max = 15)
	
	@NotBlank
    @Size(min = 3, max = 15)
	private String propertyName;
	
	@NotBlank
    @Size(min = 3, max = 50)
	private String details;
	
	@NotBlank
    @Size(min = 3, max = 15)
	private int price;
	
	@NotBlank
    @Size(min = 3, max = 15)
	private String constructionStatus;
	
	@NotBlank
    @Size(min = 3, max = 15)
	private String reraReg;
	
	@NotBlank
    @Size(min = 3, max = 15)
	private String area;
	
	@NotBlank
    @Size(min = 3, max = 15)
	private String rooms;
	
	@NotBlank
    private String plotNo;

    @NotBlank
    private String street;

    @NotBlank
    private String landmark;

    @NotBlank
    private String city;

    @NotBlank
    private String state;

    @NotBlank
    private String pincode;
    
    @NotBlank
    private Long id;
    
    @NotBlank
    private int propertyTypeId;   
    
}
