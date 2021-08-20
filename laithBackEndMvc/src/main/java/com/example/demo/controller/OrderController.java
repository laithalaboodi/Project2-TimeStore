package com.example.demo.controller;

import java.util.List;

//import org.springframework.web.bind.WebDataBinder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Buyer;
import com.example.demo.model.Orders;
import com.example.demo.model.Watch;
import com.example.demo.services.OrderServices;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@RestController
@RequestMapping(value="/orders")
@AllArgsConstructor(onConstructor=@__(@Autowired))
@NoArgsConstructor
public class OrderController {
	
	private OrderServices oServ;
	
	@GetMapping("/vieworders")
	public ResponseEntity<List<Orders>> getAllOrders(@PathVariable("orderId")int orderId){
		List<Orders> o = oServ.displayOrders();
		if(o == null) {
			return new ResponseEntity<List<Orders>>(o, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<Orders>>(o, HttpStatus.OK);
	}
		
	
	@PostMapping("/createorder")
	public Orders createOrder(Watch watch, Buyer buyer) {
		Orders o = oServ.createOrder(watch, buyer);
		return o;
		//Buyer b = bServ.displayUser(Integer.parseInt(Buyer.getEmail()));
	}
	
	@GetMapping("/findorder")
	public ResponseEntity<Orders> getOrder(@PathVariable("orderId")int orderId){
		Orders o = oServ.getByOrderId(orderId);
		if(o == null) {
			return new ResponseEntity<Orders>(o, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Orders>(o, HttpStatus.OK);
	}
	
	
}
