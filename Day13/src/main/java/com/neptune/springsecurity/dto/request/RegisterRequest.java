package com.neptune.springsecurity.dto.request;

import com.neptune.springsecurity.model.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
	  private String name;
	  private String email;
	  private String pass;
}