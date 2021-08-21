package com.example.demo.repos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Watch;

@Repository
	public interface WatchRepository extends JpaRepository<Watch, Integer>{

		Optional<Watch> findByBrand(String brand);
		Optional<Watch> findByDiscription(String discription);
	}