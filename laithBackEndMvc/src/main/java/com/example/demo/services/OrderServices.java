package com.example.demo.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.Buyer;
import com.example.demo.model.Orders;
import com.example.demo.repos.BuyerRepo;
import com.example.demo.repos.OrderRepo;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Service
@NoArgsConstructor
//@AllArgsConstructor(onConstructor = @__(@Autowired))
public class OrderServices {
	private OrderRepo oDao;
	private BuyerRepo bDao;
	
	public List<Orders> displayOrders() {
		return oDao.returnAll();
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
	public Orders getByBuyerEmail(String email) {
		Orders o = oDao.findByBuyerEmail(email);
		if (o == null) {
			return null;
		}
		else {
			return o;
		}
		
	}
	
	public void createOrder() {
		Orders o = new Orders();
	}
}


