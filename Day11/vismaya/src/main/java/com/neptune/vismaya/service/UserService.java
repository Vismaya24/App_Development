package com.neptune.vismaya.service;

import java.util.List;

import com.neptune.vismaya.dto.request.UserRequestDto;
import com.neptune.vismaya.dto.response.UserResponseDto;

public interface UserService {

	boolean saveUser(UserRequestDto userRequest);

	List<UserResponseDto> getAllUser();
	
}
