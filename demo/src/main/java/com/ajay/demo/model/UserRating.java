package com.ajay.demo.model;

public class UserRating {
	
	private int rating;
	private String name;
	public UserRating(int rating, String name) {
		super();
		this.rating = rating;
		this.name = name;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	


}
