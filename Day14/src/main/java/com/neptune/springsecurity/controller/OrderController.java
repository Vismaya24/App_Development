package com.neptune.springsecurity.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.neptune.springsecurity.dto.request.OrderRequest;
import com.neptune.springsecurity.service.OrderService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/picasso/order")
@RequiredArgsConstructor
@Tag(name = "Order")
public class OrderController {

//	private final OrderService orderService;
//	
//	@PostMapping("/addOrder")
//	public ResponseEntity<String> saveOrder(@RequestBody OrderRequest request){
//		boolean isSaved = orderService.saveOrder(request);
//		return isSaved ? ResponseEntity.status(200).body("Order saved successfully")
//				: ResponseEntity.badRequest().build();
//	}
}
