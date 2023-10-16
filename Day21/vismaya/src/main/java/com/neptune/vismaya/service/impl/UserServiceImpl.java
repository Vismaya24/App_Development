package com.neptune.vismaya.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.neptune.vismaya.dto.response.CountResponse;
import com.neptune.vismaya.dto.request.UserRequest;
import com.neptune.vismaya.dto.response.UserResponse;
import com.neptune.vismaya.model.User;
import com.neptune.vismaya.repository.UserRepository;
import com.neptune.vismaya.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository userRepository;
	
	@Override
    public List<UserResponse> getAllUser() {
        List<User> userList = userRepository.findAll();

        return userList.stream()
                .map(this::mapToUserResponse)
                .collect(Collectors.toList());
    }
	@Override
	public UserResponse updateUser(UserRequest userRequest, Long uid) {
		User user = userRepository.findByUid(uid);
		if(user != null) {
			user.setName(userRequest.getName());
			user.setEmail(userRequest.getEmail());
			user.setPhno(userRequest.getPhno());
			user.setAddress(userRequest.getAddress());
			user.setRole(userRequest.getRole());
            user.setIsEnabled(userRequest.getIsEnabled());
			user.setPword(user.getPword());
			
			userRepository.save(user);
			
			return mapToUserResponse(user);
		} else {
			throw new EntityNotFoundException("User with id "+ uid+" not found");
		}
	}
	
	@Override
	public boolean deleteUser(Long uid) {
		User user = userRepository.findByUid(uid);
		if(user != null) {
			userRepository.deleteById(uid);
			return true;
		} else {
			return false;
		}
	}
	private UserResponse mapToUserResponse(User user) {
		return UserResponse.builder()
				.uid(user.getUid())
				.name(user.getName())
				.email(user.getEmail())
				.phno(user.getPhno())
				.address(user.getAddress())
				.role(user.getRole())
                .isEnabled(user.getIsEnabled())
				.build();
				
	}
	@Override
	public UserResponse getUser(Long uid) {
		User user = userRepository.findByUid(uid);
		return mapToUserResponse(user);
	}
	@Override
    public CountResponse userCount() {
        long count = userRepository.count();
        return CountResponse.builder().count(count).build();
    }
}