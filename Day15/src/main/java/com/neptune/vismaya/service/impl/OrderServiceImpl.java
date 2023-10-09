//package com.neptune.vismaya.service.impl;
//
//import java.util.ArrayList;
//import java.util.Date;
//import java.util.List;
//import java.util.stream.Collectors;
//
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import com.neptune.vismaya.dto.info.ArtInfo;
//import com.neptune.vismaya.dto.request.OrderRequest;
//import com.neptune.vismaya.dto.response.CountResponse;
//import com.neptune.vismaya.dto.response.OrderResponse;
//import com.neptune.vismaya.repository.ArtRepository;
//import com.neptune.vismaya.repository.OrderRepository;
//import com.neptune.vismaya.repository.UserRepository;
//import com.neptune.vismaya.service.ArtService;
//import com.neptune.vismaya.service.OrderService;
//import com.neptune.vismaya.model.Art;
//import com.neptune.vismaya.model.Order;
//import com.neptune.vismaya.model.OrderMapping;
//import com.neptune.vismaya.model.User;
//
//import lombok.RequiredArgsConstructor;
//
//@Service
//@Transactional
//@RequiredArgsConstructor
//public class OrderServiceImpl implements OrderService {
//
//    private final UserRepository userRepository;
//    private final ArtRepository artRepository;
//    private final OrderRepository orderRepository;
//    private final ArtService artService;
//
//    @Override
//    public boolean saveOrder(OrderRequest request) {
//        User user = userRepository.findByUid(request.getUid());
//        List<ArtInfo> artInfoList = request.getArt();
//        long orderTotal = calculateOrderTotal(artInfoList);
//
//        if (orderTotal <= 0) {
//            throw new IllegalArgumentException("Order total must be greater than zero.");
//        }
//
//        try {
//            Order order = createOrder(request, user, orderTotal, artInfoList);
//            orderRepository.save(order);
//            return true;
//        } catch (Exception e) {
//            e.printStackTrace();
//            return false;
//        }
//    }
//
//    private Order createOrder(OrderRequest request, User user, long orderTotal, List<ArtInfo> artInfoList) {
//        Order order = Order.builder()
//                .orderDate(new Date())
//                .orderAddress(request.getOrderAddress())
//                .paymentMode(request.getPaymentMode())
//                .user(user)
//                .orderTotal(orderTotal)
//                .orderMappings(request.getArt().stream()
//                        .map(artRequest -> {
//                            Art art = artService.getArtModelId(artRequest.getAid());
//                            if (art != null) {
//                                return OrderMapping.builder().art(art).build();
//                            } else {
//                                throw new IllegalArgumentException("Invalid product ID: " + artRequest.getAid());
//                            }
//                        })
//                        .collect(Collectors.toList()))
//                .build();
//
//        updateArtQuantities(artInfoList);
//
//        return order;
//    }
//
//    private List<Art> updateProductQuantities(List<ArtInfo> productInfoList) {
//        List<Art> updatedProducts = new ArrayList<>();
//
//        for (ArtInfo artInfo : artInfoList) {
//            Long productId = artInfo.getAid();
//            Long quantity = artInfo.getQuantity();
//
//            Art product = getProductOrThrow(productId);
//
//            if (product.getProductQuantity() < quantity) {
//                throw new IllegalArgumentException("Insufficient quantity for product ID: " + productId);
//            }
//
//            Art updatedProduct = createUpdatedProduct(product, quantity);
//            productRepository.save(updatedProduct);
//            updatedProducts.add(updatedProduct);
//        }
//
//        return updatedProducts;
//    }
//
//    private Art getProductOrThrow(Long productId) {
//        return productRepository.findById(productId)
//                .orElseThrow(() -> new IllegalArgumentException("Product not found for ID: " + productId));
//    }
//
//    private Art createUpdatedProduct(Art art, Long quantity) {
//        Art updatedArt = new Art();
//        updatedArt.setAid(art.getAid());
//        updatedArt.setArtname(art.getArtname());
//        updatedArt.setPrice(art.getPrice());
//        updatedArt.setProductQuantity(art.getQty() - quantity);
//        updatedArt.setArtimg(art.getArtimg());
//        updatedArt.setType(art.getType());
//        updatedArt.setStyle(art.getStyle());
//        return updatedArt;
//    }
//
//    private long calculateOrderTotal(List<ArtInfo> productInfoList) {
//        return productInfoList.stream()
//                .mapToLong(productInfo -> {
//                    Art product = getProductOrThrow(productInfo.getPid());
//                    if (product.getProductQuantity() < productInfo.getQuantity()) {
//                        throw new IllegalArgumentException(
//                                "Insufficient quantity for product ID: " + productInfo.getPid());
//                    }
//                    return (long) (product.getProductPrice() * productInfo.getQuantity());
//                })
//                .sum();
//    }
//
//    @Override
//    public List<OrderResponse> getOrders(Long uid) {
//        return convertToOrderResponse(orderRepository.findAllByUserUid(uid));
//    }
//
//    public List<OrderResponse> convertToOrderResponse(List<Order> orders) {
//        return orders.stream()
//                .map(order -> {
//                    OrderResponse.OrderResponseBuilder builder = OrderResponse.builder()
//                            .oid(order.getOid())
//                            .orderDate(order.getOrderDate())
//                            .orderTotal(order.getOrderTotal())
//                            .orderAddress(order.getOrderAddress())
//                            .paymentMode(order.getPaymentMode());
//
//                    List<Art> products = order.getOrderMappings().stream()
//                            .map(OrderMapping::getProduct)
//                            .collect(Collectors.toList());
//
//                    builder.art(art);
//
//                    return builder.build();
//                })
//                .collect(Collectors.toList());
//    }
//
//    @Override
//    public CountResponse orderCount() {
//        long count = orderRepository.count();
//        return CountResponse.builder().count(count).build();
//    }
//
//}
