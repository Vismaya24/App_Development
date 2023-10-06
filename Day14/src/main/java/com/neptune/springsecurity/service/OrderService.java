package com.neptune.springsecurity.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.neptune.springsecurity.dto.request.OrderRequest;
import com.neptune.springsecurity.model.Art;
import com.neptune.springsecurity.model.User;
import com.neptune.springsecurity.repository.OrderRepository;
import com.neptune.springsecurity.repository.UserRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class OrderService {

//	private final OrderRepository orderRepository;
//	private final UserRepository userRepository;
//	
//	public boolean saveOrder(OrderRequest request){
//		User user = userRepository.findById(request.getId());
//		List<Art> art = request.getArt();
//		double orderTotal = calculateOrderTotal(art);
//		if(orderTotal <= 0) {
//			throw new IllegalArgumentException("Order total must be greater than zero");
//		}
//		try {
//			Order order = createOrder(request, user, orderTotal, art);
//			orderRepository.save(order);
//			return true;
//		}catch(Exception e) {
//			e.printStackTrace();
//			return false;
//		}
//	}
}
