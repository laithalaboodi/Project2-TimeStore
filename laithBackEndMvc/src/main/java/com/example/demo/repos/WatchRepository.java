package com.example.demo.repos;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;



import com.example.demo.model.Watch;


	public interface WatchRepository extends JpaRepository<Watch, Integer>{

	
	public List<Watch> findAll();
	
	}