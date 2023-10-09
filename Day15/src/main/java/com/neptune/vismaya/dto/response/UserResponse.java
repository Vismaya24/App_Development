package com.neptune.vismaya.dto.response;

import com.neptune.vismaya.model.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {
	
	private Long uid;
    private String name;
    private String email;
    private Boolean isEnabled;
    private Role role;
    private Long phno;    
    private String address;
	
}
