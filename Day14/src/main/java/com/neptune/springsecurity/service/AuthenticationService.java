package com.neptune.springsecurity.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.neptune.springsecurity.dto.request.AuthenticationRequest;
import com.neptune.springsecurity.dto.request.RegisterRequest;
import com.neptune.springsecurity.dto.response.AuthenticationResponse;
import com.neptune.springsecurity.model.User;
import com.neptune.springsecurity.model.enumerate.Role;
import com.neptune.springsecurity.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
	
	private final PasswordEncoder passwordEncoder;
	private final UserRepository repository;
	private final JwtService jwtService;
	private final AuthenticationManager authenticationManager;

	public AuthenticationResponse register(RegisterRequest request) {
		var user=User.builder()
				.name(request.getName())
				.email(request.getEmail())
				.pass(passwordEncoder.encode(request.getPass()))
				.role(Role.USER)
				.build();
		repository.save(user);
		//var jwtToken=jwtService.generateToken(user);
		//return AuthenticationResponse.builder()build();
		return null;
	}
	
	public AuthenticationResponse authenticate(AuthenticationRequest request) {
		authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(
						request.getEmail(),request.getPass()));
		var user=repository.findByEmail(request.getEmail()).orElseThrow();
		var jwtToken = jwtService.generateToken(user);
		return AuthenticationResponse.builder().token(jwtToken).build();
	}
	
	    
}