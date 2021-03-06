package com.example.demo.services;

import java.util.List;


import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

import com.example.demo.model.Buyer;
import com.example.demo.model.Orders;
import com.example.demo.model.Watch;
import com.example.demo.repos.OrderRepo;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Service
@NoArgsConstructor
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class OrderServices {
	private OrderRepo oDao;
	
	public List<Orders> displayOrders() {
		List<Orders> o = oDao.findAll();
		if (o == null) {
			return null;
		}
		else {
			return o;
		}
	} 
	
	public Orders getByOrderId(int id) {
		Orders o = oDao.findByOrderId(id);
		if (o == null) {
			return null;
		}
		else {
			return o;
		}
		
	}
	/*
	public Orders getByBuyerEmail(String email) {
		Orders o = oDao.findByBuyerEmail(email);
		if (o == null) {
			return null;
		}
		else {
			return o;
		}
	}*/
	
	public Orders createOrder(Orders order) {
 	return	oDao.save(order);
		/*Orders o = new Orders(watch, buyer);
		return o;*/
	//	return null;
	}
	
}


