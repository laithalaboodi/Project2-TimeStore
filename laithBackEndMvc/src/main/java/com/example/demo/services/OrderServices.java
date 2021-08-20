package com.example.demo.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

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
		List<Orders> o = oDao.returnAll();
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
		
	}/*
	public Orders getByBuyerEmail(String email) {
		Orders o = oDao.findByBuyerEmail(email);
		if (o == null) {
			return null;
		}
		else {
			return o;
		}
		
	}*/
	/*
	public Orders createOrder(Watch watch, Buyer buyer) {
		Orders o = new Orders(buyer, watch);
		return o;
	}*/
}

