package com.neptune.vismaya.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "art")
public class Art {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long aid;
	
	@Column(length = 300, nullable = false)
	private String artname;
	
	@Column(nullable = false)
	private double price;
	
	@Column(nullable = false)
	private String artist;
	
	@Column(nullable = false)
	private String style;
	
	@Column(nullable = false)
	private String type;
	
	@Column(nullable = false)
	private String size;
	
	@Column(nullable = false)
	private int year;
	
	@Column(nullable = true)
	private String artimg;
	
	
}
