package com.example.demo.services;

import org.springframework.stereotype.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.model.Buyer;
import com.example.demo.repos.BuyerRepo;

import lombok.NoArgsConstructor;

import lombok.AllArgsConstructor;

import com.example.demo.model.Orders;


@Service
@NoArgsConstructor
@AllArgsConstructor(onConstructor=@__(@Autowired))
public class BuyerService {

	private BuyerRepo uDao;
	
	public Buyer registerUser(Buyer u) {
		try {
			return uDao.save(u);
		} catch(Exception e) {
			return null;
		}
	}
	
	public Buyer loginUser(String email, String password) {
		
		
		
		//findByUsername will return null if the user does not exist
		Buyer u = uDao.findByEmail(email);
		//If username does not exist return null
		if(u == null) {
			return null;
		}
		else {
			//If you user exists but password is wrong return null
			if(!u.getPass().equals(password)) {
				return null;
			}
			//Else return the logged in user
			else {
				return u;
			}
		}
	}
	
	public Buyer displayUser(String email) {
		Buyer u = uDao.findByEmail(email);
		if(u == null) {
			return null;
		}
		else {
			return u;
		}
	}
	
	public Buyer getUserById(int id) {
		return uDao.getById(id);
	}
	
	
	public List<Orders> getBuyerOrders(int buyerid){
        Buyer u = uDao.getById(buyerid);

        return u.getOrdersList();
    }
	
	
	
	public Buyer updateBuyer(int buyerid, String newemail, String newpass) {
	   Buyer buyer = uDao.findById(buyerid);
	    // crush the variables of the object found
	  if (buyer ==null) {
		return null;
	} else {

		if (!newemail.equals("")) {
			
				buyer.setEmail(newemail);
		}
		
		if (!newpass.equals("")) {
			
			  buyer.setPass(newpass);
	}
	
	
		 
		   
		  return  uDao.save(buyer);
		  
		
		
		
	}
	   
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
