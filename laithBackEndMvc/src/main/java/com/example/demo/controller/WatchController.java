package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Watch;
import com.example.demo.services.WatchService;

@RestController
@RequestMapping(value="/watches")
@CrossOrigin(origins="*")
public class WatchController {
	private final WatchService watchService;
	
	@Autowired
	public WatchController(WatchService watchService) {
		this.watchService = watchService;
	}
	
	@GetMapping("/getwatches")
	public List<Watch> getWatches(){
		return watchService.getWatchs();
	}
	
	/*@GetMapping("/getwatch/{watchid}")
	public Watch getWatch(@PathVariable("watchid") int id) {
		return watchService.getWatch(id);
	}*/

}
