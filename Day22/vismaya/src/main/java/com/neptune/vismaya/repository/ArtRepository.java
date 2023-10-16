package com.neptune.vismaya.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neptune.vismaya.model.Art;

public interface ArtRepository extends JpaRepository<Art, Long>{

	Optional<Art> existsByArtname(String artname);

	void deleteByAid(Long aid);

	Art findByAid(Long aid);
	

}
