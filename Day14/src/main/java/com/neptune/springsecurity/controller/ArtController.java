package com.neptune.springsecurity.controller;


import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.neptune.springsecurity.dto.request.ArtRequest;
import com.neptune.springsecurity.dto.response.ArtResponse;
import com.neptune.springsecurity.model.Art;
import com.neptune.springsecurity.service.ArtService;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/api/picasso/art")	
@RequiredArgsConstructor
public class ArtController {

	private final ArtService artService;

	@PostMapping("/postArt")
	public ResponseEntity<String> saveArt(@RequestBody ArtRequest artRequest){
		boolean isArtSaved = artService.saveArt(artRequest);
		return isArtSaved ? ResponseEntity.status(201).body("Added Successfully"):
			   ResponseEntity.status(403).body("Something went wrong");
	}
	@GetMapping("/getArt")
	public ResponseEntity<List<ArtResponse>> getArt(){
		List<ArtResponse> artList= artService.getArt();
		return !artList.isEmpty() ? ResponseEntity.status(200).body(artList):
			ResponseEntity.noContent().build();
	}
	@PutMapping("/update/{id}")
	public ResponseEntity<ArtResponse> updateArt(@RequestBody ArtRequest artRequest, @PathVariable int id){
		ArtResponse artResponse = artService.updateArt(artRequest, id);
		return artResponse != null ? ResponseEntity.ok().body(artResponse):
			ResponseEntity.notFound().build();
	}
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteArt(@PathVariable int id){
    	boolean isDeleted = artService.deleteArt(id);
    	return isDeleted ? ResponseEntity.ok().body("Art Deleted Sucessfully"):
    		ResponseEntity.notFound().build();
    }

}
