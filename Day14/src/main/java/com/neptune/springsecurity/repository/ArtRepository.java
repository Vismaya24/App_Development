package com.neptune.springsecurity.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neptune.springsecurity.model.Art;

public interface ArtRepository extends JpaRepository<Art, Integer>{

	Optional<Art> existsByArtname(String artname);
	
	Art findById(int id);
	
	void deleteById(int ind);
}
