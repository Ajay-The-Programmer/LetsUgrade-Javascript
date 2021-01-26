package com.ajay.demo.model;

import java.util.List;

public class Product {
	
	private int pid;
	private int catId;
	private String prodName;
	private String prodDesc;
	private String prodImgUrl;
	private int price;
	private int qty;
	private List<UserRating> reviews;
	
	
	
	
	public Product(int pid, int catId, String prodName, String prodDesc, String prodImgUrl, int price, int qty) {
		super();
		this.pid = pid;
		this.catId = catId;
		this.prodName = prodName;
		this.prodDesc = prodDesc;
		this.prodImgUrl = prodImgUrl;
		this.price = price;
		this.qty = qty;
	}
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public int getCatId() {
		return catId;
	}
	public void setCatId(int catId) {
		this.catId = catId;
	}
	public String getProdName() {
		return prodName;
	}
	public void setProdName(String prodName) {
		this.prodName = prodName;
	}
	public String getProdDesc() {
		return prodDesc;
	}
	public void setProdDesc(String prodDesc) {
		this.prodDesc = prodDesc;
	}
	public String getProdImgUrl() {
		return prodImgUrl;
	}
	public void setProdImgUrl(String prodImgUrl) {
		this.prodImgUrl = prodImgUrl;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	public List<UserRating> getReviews() {
		return reviews;
	}
	public void setReviews(List<UserRating> reviews) {
		this.reviews = reviews;
	}


}
