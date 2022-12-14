package com.squarefeets.payload;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class SignUpRequestForCustomer {

    @NotBlank
    @Size(min = 3, max = 15)
    private String username;

    @NotBlank
    @Size(min = 6, max = 20)
    private String password;

    @NotBlank
    @Size(max = 10, min = 10)
    private String mobileNo;

    @NotBlank
    @Size(max = 12, min = 12)
    private String aadharNo;

    @NotBlank
    @Size(max = 40)
    private String email;

    @NotBlank
    @Size(max = 40)
    private String plotNo;

    @NotBlank
    @Size(max = 40)
    private String street;

    @NotBlank
    @Size(max = 40)
    private String landmark;

    @NotBlank
    @Size(max = 40)
    private String city;

    @NotBlank
    @Size(max = 40)
    private String state;

    @NotBlank
    @Size(max = 40)
    private String pincode;

    public SignUpRequestForCustomer() {
    }

    public SignUpRequestForCustomer(String username, String password, String mobileNo, String aadharNo, String email, String plotNo, String street, String landmark, String city, String state, String pincode) {
        this.username = username;
        this.password = password;
        this.mobileNo = mobileNo;
        this.aadharNo = aadharNo;
        this.email = email;
        this.plotNo = plotNo;
        this.street = street;
        this.landmark = landmark;
        this.city = city;
        this.state = state;
        this.pincode = pincode;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    public String getAadharNo() {
        return aadharNo;
    }

    public void setAadharNo(String aadharNo) {
        this.aadharNo = aadharNo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPlotNo() {
        return plotNo;
    }

    public void setPlotNo(String plotNo) {
        this.plotNo = plotNo;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getLandmark() {
        return landmark;
    }

    public void setLandmark(String landmark) {
        this.landmark = landmark;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getPincode() {
        return pincode;
    }

    public void setPincode(String pincode) {
        this.pincode = pincode;
    }
}
