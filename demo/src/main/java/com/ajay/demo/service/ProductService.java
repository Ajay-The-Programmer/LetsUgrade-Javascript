package com.ajay.demo.service;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import com.ajay.demo.model.Product;
import com.ajay.demo.model.UserRating;

@Service
public class ProductService {
	
	


	@Bean
	public Product getProduct() {
		Product prod = new Product(10, 1, "Adidas Shoes", "Must wear shoes", "adidas.jpg", 5000, 2);
		
		prod.setReviews(Arrays.asList(new UserRating(5,"Sunil"), new UserRating(4,"Ganesh")));
		
		return prod;
	}
}


