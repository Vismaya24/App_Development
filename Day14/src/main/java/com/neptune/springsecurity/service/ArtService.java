package com.neptune.springsecurity.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.neptune.springsecurity.dto.request.ArtRequest;
import com.neptune.springsecurity.dto.response.ArtResponse;
import com.neptune.springsecurity.model.Art;
import com.neptune.springsecurity.repository.ArtRepository;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;



@Service
@Transactional
@RequiredArgsConstructor
public class ArtService {
	
	private final ArtRepository artRepository ; 

	public List<ArtResponse> getArt() {
		List<Art> artList = artRepository.findAll();
		
		return artList.stream()
				.map(this::mapToArtResponse)
				.collect(Collectors.toList());
	}

	public boolean saveArt(ArtRequest artRequest) {
		Optional<Art> isArtOptional = artRepository.existsByArtname(artRequest.getArtname());
		if(isArtOptional.isPresent()) {
			var data = Art.builder()
					.artname(artRequest.getArtname())
					.artist(artRequest.getArtist())
					.price(artRequest.getPrice())
					.build();
			artRepository.save(data);
			return true;
		}
		return false;
	}
	public boolean deleteArt(int id) {
		
		Art art = artRepository.findById(id);
		if(art != null) {
			artRepository.deleteById(id);
			return true;
		} else {
			return false;			
		}
	}
	public ArtResponse updateArt(ArtRequest artRequest, int id) {
		Art art = artRepository.findById(id);
		if(art != null) {
			art.setArtname(artRequest.getArtname());
			art.setArtist(artRequest.getArtist());
			art.setPrice(artRequest.getPrice());
			artRepository.save(art);
			return mapToArtResponse(art);
		}
		else {
	         throw new EntityNotFoundException("User with id "+ id + "not found");
		}
	}
	private ArtResponse mapToArtResponse(Art art) {
		return ArtResponse.builder()
				.id(art.getId())
				.artname(art.getArtname())
				.artist(art.getArtist())
				.price(art.getPrice())
				.build();
	}
}
