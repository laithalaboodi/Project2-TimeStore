package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Watch;

import com.example.demo.services.WatchService;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@RestController
@RequestMapping(value="/watches")
@CrossOrigin(origins="*")
@AllArgsConstructor(onConstructor=@__(@Autowired))
@NoArgsConstructor

public class WatchController {
	private  WatchService watchService;
	


	
	

	@GetMapping("/get")
	public ResponseEntity<List<Watch>> getAllWatches(){
		return new ResponseEntity<>( watchService.getWatches(), HttpStatus.OK);
	}
	
	
	
	
  }
