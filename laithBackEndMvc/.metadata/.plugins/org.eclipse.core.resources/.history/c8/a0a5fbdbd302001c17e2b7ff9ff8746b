package com.example.demo.controller;

import java.util.LinkedHashMap;

import java.util.List;

//import org.springframework.web.bind.WebDataBinder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Buyer;
import com.example.demo.model.Orders;
import com.example.demo.model.Watch;
import com.example.demo.services.BuyerService;
import com.example.demo.services.OrderServices;
import com.example.demo.services.WatchService;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@RestController
@RequestMapping(value="/orders")
@AllArgsConstructor(onConstructor=@__(@Autowired))
@NoArgsConstructor
@CrossOrigin(origins="*")
public class OrderController {
	
	private OrderServices oServ;
	private BuyerService bServ;
	private WatchService wServ;
	
	/*
	@GetMapping("/vieworders/{orderId}")
	public ResponseEntity<List<Orders>> getAllOrders(@PathVariable("orderId")int orderId){
		List<Orders> o = oServ.displayOrders();
		if(o == null) {
			return new ResponseEntity<List<Orders>>(o, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<Orders>>(o, HttpStatus.OK);
	} */
	
	@GetMapping("/{email}")
	public ResponseEntity<List<Orders>> getAllOrders(@PathVariable("email")String email){
		List<Orders> o = oServ.displayOrders();
		if(o == null) {
			return new ResponseEntity<List<Orders>>(o, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<Orders>>(o, HttpStatus.OK);
	}
	
	/*
	@PostMapping("/createorder")
	public Orders createOrder(Watch watch, Buyer buyer) {
		Orders o = new Orders(watch,buyer);
		
		return o;
		//Buyer b = bServ.displayUser(Integer.parseInt(Buyer.getEmail()));
	}*/
	@PostMapping("/createorder")
	public ResponseEntity<String> createPost(@RequestBody LinkedHashMap<String, String> order){
        Buyer u = bServ.getUserById(Integer.parseInt(order.get("buyerid")));
        Watch w = wServ.getWatch(Integer.parseInt(order.get("watchid")));
        //Post p = new Post(u, post.get("content"));
        //pServ.createPost(p);
        Orders newOrder = new Orders(w,u); 
        oServ.createOrder(newOrder);
        return new ResponseEntity<String>("Order created successfully", HttpStatus.CREATED);
	}
	
	/*
	@GetMapping("/findorder/{orderId}")
	public ResponseEntity<Orders> getOrder(@PathVariable("orderId")int orderId){
	Orders o = oServ.getByOrderId(orderId);
		if(o == null) {
			return new ResponseEntity<Orders>(o, HttpStatus.NOT_FOUND);
		}
	return new ResponseEntity<Orders>(o, HttpStatus.OK);
	}*/
	//this also works but the above is better modified 
	/*
	@GetMapping("/findorder/{orderId}")
	public Orders getOrder(@PathVariable int orderId) {		
			return oServ.getByOrderId(orderId);		
	}*/
	
	
}
