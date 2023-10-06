package com.neptune.springsecurity.model;

import java.util.Date;

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

//@Data
//@Builder
//@NoArgsConstructor
//@AllArgsConstructor
//@Entity
//@Table(name="order")
//public class Order {
//
//	@Id
//	@GeneratedValue(strategy=GenerationType.IDENTITY)
//	private int oid;
//	
//	@Column(nullable = false)
//	private Date orderDate;
//	
//	@Column(nullable = false)
//	private Double orderTotal;
//	
//	@Column(nullable = false)
//	private String orderAddress;
//	
//	@Column(nullable = false)
//	private String paymentMode;
//	
//	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//	private User user;
//	
//	
//}
