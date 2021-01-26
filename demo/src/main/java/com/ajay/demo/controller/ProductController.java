package com.ajay.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ajay.demo.model.Product;
import com.ajay.demo.service.ProductService; 

@RestController
public class ProductController {

	@Autowired
	public ProductService productService;
	
	@GetMapping(path="/hello")
	public String sayHello() {
		 
		return "Hello spring boot aplication";
		 
	}
	
	
	@GetMapping("/product")
	public Product getProduct() {
		return productService.getProduct();
	}	

}
