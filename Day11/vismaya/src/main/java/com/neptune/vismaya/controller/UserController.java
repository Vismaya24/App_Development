package com.neptune.vismaya.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.neptune.vismaya.dto.request.UserRequestDto;
import com.neptune.vismaya.dto.response.UserResponseDto;
import com.neptune.vismaya.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/picasso/user")
@RequiredArgsConstructor
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/save")
	public ResponseEntity<String> saveUser(@RequestBody UserRequestDto userRequest){
		boolean isDataSaved = userService.saveUser(userRequest);
		return isDataSaved ? ResponseEntity.status(200).body("User added successfully"):
				ResponseEntity.status(403).body("Something went wrong");
	}
	@GetMapping("/all")
	public ResponseEntity<List<UserResponseDto>> getAllUser(){
		List<UserResponseDto> userList = userService.getAllUser();
		return userList.size() > 0 ? ResponseEntity.status(200).body(userList) : ResponseEntity.status(404).body(userList);
	}
}
