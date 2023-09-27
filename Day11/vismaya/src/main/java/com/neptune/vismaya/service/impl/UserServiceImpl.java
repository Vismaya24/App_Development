package com.neptune.vismaya.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;
import com.neptune.vismaya.dto.request.UserRequestDto;
import com.neptune.vismaya.dto.response.UserResponseDto;
import com.neptune.vismaya.model.User;
import com.neptune.vismaya.repository.UserRepository;
import com.neptune.vismaya.service.UserService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public boolean saveUser(UserRequestDto userRequest) {
		Optional<User> isUserOptional = userRepository.existsByEmail(userRequest.getEmail());
		if(isUserOptional.isPresent()) {
			var data = User.builder()
					.username(userRequest.getUsername())
					.email(userRequest.getEmail())
					.password(userRequest.getPassword())
					.build();
			userRepository.save(data);
			return true;
		} else {
			return false;
		}
	}

	@Override
	public List<UserResponseDto> getAllUser() {
        List<User> userList = userRepository.findAll();
        List<UserResponseDto> userResponseList = new ArrayList<>();
        UserResponseDto userResponse = new UserResponseDto();
        for(User user : userList) {
        	userResponse.setId(user.getId());
        	userResponse.setUsername(user.getUsername());
        	userResponse.setEmail(user.getEmail());
        	userResponse.setPassword(user.getPassword());
        	userResponseList.add(userResponse);
        }
		return userResponseList;
	}
}
