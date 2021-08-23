package com.example.demo.repos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Watch;

@Repository
	public interface WatchRepository extends JpaRepository<Watch, Integer>{
		Optional<Watch> findById(int watchid);
		Optional<Watch> findByDescription(String discription);
		Optional<Watch> findByBrand(String brand);
	}