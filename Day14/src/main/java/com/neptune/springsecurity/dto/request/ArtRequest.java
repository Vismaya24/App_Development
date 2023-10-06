package com.neptune.springsecurity.dto.request;

import com.neptune.springsecurity.dto.response.ArtResponse;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ArtRequest {

	private String artname;
	private String artist;
	private double price;
}
