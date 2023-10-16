package com.neptune.vismaya.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.neptune.vismaya.dto.info.ArtInfo;
import com.neptune.vismaya.dto.request.OrderRequest;
import com.neptune.vismaya.dto.response.CountResponse;
import com.neptune.vismaya.dto.response.OrderResponse;
import com.neptune.vismaya.repository.ArtRepository;
import com.neptune.vismaya.repository.OrderRepository;
import com.neptune.vismaya.repository.UserRepository;
import com.neptune.vismaya.service.ArtService;
import com.neptune.vismaya.service.OrderService;
import com.neptune.vismaya.model.Art;
import com.neptune.vismaya.model.Order;
import com.neptune.vismaya.model.OrderMapping;
import com.neptune.vismaya.model.User;

import lombok.RequiredArgsConstructor;



@Service
@Transactional
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService{
	
	private final UserRepository userRepository;
    private final ArtRepository artRepository;
    private final OrderRepository orderRepository;
    private final ArtService artService;
    
    @Override
    public boolean saveOrder(OrderRequest request) {
        User user = userRepository.findByUid(request.getUid());
        List<ArtInfo> artInfoList = request.getArt();
        long orderTotal = calculateOrderTotal(artInfoList);

        if (orderTotal <= 0) {
            throw new IllegalArgumentException("Order total must be greater than zero.");
        }

        try {
            Order order = createOrder(request, user, orderTotal, artInfoList);
            orderRepository.save(order);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
    private Order createOrder(OrderRequest request, User user, long orderTotal, List<ArtInfo> artInfoList) {
        Order order = Order.builder()
                .orderDate(new Date())
                .orderAddress(request.getOrderAddress())
                .paymentMode(request.getPaymentMode())
                .user(user)
                .orderTotal(orderTotal)
                .orderMappings(request.getArt().stream()
                        .map(artRequest -> {
                            Art art = artService.getArtModelId(artRequest.getAid());
                            if (art != null) {
                                return OrderMapping.builder().art(art).build();
                            } else {
                                throw new IllegalArgumentException("Invalid product ID: " + artRequest.getAid());
                            }
                        })
                        .collect(Collectors.toList()))
                .build();

        updateArtQuantities(artInfoList);

        return order;
    }
    private List<Art> updateArtQuantities(List<ArtInfo> artInfoList) {
        List<Art> updatedArts = new ArrayList<>();

        for (ArtInfo artInfo : artInfoList) {
            Long artId = artInfo.getAid();
            Long quantity = artInfo.getQuantity();

            Art art = getArtOrThrow(artId);

            if (art.getArtQty() < quantity) {
                throw new IllegalArgumentException("Insufficient quantity for product ID: " + artId);
            }

            Art updatedArt = createUpdatedArt(art, quantity);
            artRepository.save(updatedArt);
            updatedArts.add(updatedArt);
        }

        return updatedArts;
    }
    private Art createUpdatedArt(Art art, Long quantity) {
        Art updatedProduct = new Art();
        updatedProduct.setAid(art.getAid());
        updatedProduct.setArtname(art.getArtname());
        updatedProduct.setPrice(art.getPrice());
        updatedProduct.setArtQty(art.getArtQty() - quantity);
        updatedProduct.setArtimg(art.getArtimg());
        return updatedProduct;
    }
    private long calculateOrderTotal(List<ArtInfo> artInfoList) {
        return artInfoList.stream()
                .mapToLong(artInfo -> {
                    Art art = getArtOrThrow(artInfo.getAid());
                    if (art.getArtQty() < artInfo.getQuantity()) {
                        throw new IllegalArgumentException(
                                "Insufficient quantity for product ID: " + artInfo.getAid());
                    }
                    return (long) (art.getPrice() * artInfo.getQuantity());
                })
                .sum();
    }
    private Art getArtOrThrow(Long artId) {
        return artRepository.findById(artId)
                .orElseThrow(() -> new IllegalArgumentException("Art not found for ID: " + artId));
    }

	@Override
	public List<OrderResponse> getOrders(Long uid) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public CountResponse orderCount() {
		// TODO Auto-generated method stub
		return null;
	}
    
}
