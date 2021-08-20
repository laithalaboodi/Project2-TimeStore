package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Buyer;
import com.example.demo.model.Orders;
import com.example.demo.services.BuyerService;
import com.example.demo.services.OrderServices;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@RestController
@RequestMapping(value="/orders")
//@AllArgsConstructor(onConstructor=@__(@Autowired))
@NoArgsConstructor
public class OrderController {
	
	private OrderServices oServ;
	private BuyerService bServ;
	
	@GetMapping("/orderview")
	public List<Orders> getOrders() {
		return oServ.displayOrders();
	}
	
	@PostMapping("/createorder")
	public Orders createOrder() {
		//Buyer b = bServ.displayUser(Integer.parseInt(Buyer.getEmail()));
	}
	
	
}
