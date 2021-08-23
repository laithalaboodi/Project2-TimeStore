package com.example.demo.repos;


import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.Orders;


public interface OrderRepo extends JpaRepository<Orders, Integer>{
  
	public List<Orders> findAll();
	public Orders findByBuyerEmail(String email);
	public Orders findByOrderId(int id);
}
