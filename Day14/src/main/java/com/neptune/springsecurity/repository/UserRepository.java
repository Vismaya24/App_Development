package com.neptune.springsecurity.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neptune.springsecurity.model.User;


public interface UserRepository extends JpaRepository<User,Long> {

	Optional<User> findByName(String name);
}