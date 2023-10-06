package com.neptune.springsecurity.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ArtResponse {

	private int id;
	private String artname;
	private String artist;
	private double price;
}
