package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Watch;
import com.example.demo.repos.BuyerRepo;
import com.example.demo.repos.WatchRepository;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Service
@NoArgsConstructor
@AllArgsConstructor(onConstructor=@__(@Autowired))

public class WatchService {
	
	private  WatchRepository watchRepository;
	
	


	
	
	public List<Watch> getWatches(){
		return watchRepository.findAll();
	}
	
	public Watch getWatch(int id) {
		return watchRepository.getById(id);
	}
	
	public void addNewWatches(List<Watch>  watches) {

		watchRepository.saveAll(watches);
	}



}