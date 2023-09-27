package com.neptune.vismaya.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neptune.vismaya.model.User;

public interface UserRepository extends JpaRepository<User, String> {
  
	Optional<User> existsByEmail(String email);
}
