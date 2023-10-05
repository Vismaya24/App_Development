package com.neptune.springsecurity.service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {
	
	  private static final String SECRET_KEY="8d4fea253025abd0c6fb5768aac9c7d510acbd1a1a24fe7b8359beeda27ece7c";
		
		public String extractUsername(String token) {
			return extractClaim(token,Claims::getSubject);
		}
		
		public <T> T extractClaim(String token,Function<Claims,T> claimsResolver) {
			final Claims claims=extractAllClaims(token);
			return claimsResolver.apply(claims);
		}
		
		public String generateToken(UserDetails userDetails) {
			return generateToken(new HashMap(),userDetails);
		}
		
		public String generateToken(
			Map<String,Object>extractClaims,
			UserDetails userDetails) {
			return Jwts.builder()
					.setClaims(extractClaims)
					.setSubject(userDetails.getUsername())
					.setIssuedAt(new Date(System.currentTimeMillis()))
					.setExpiration(new Date(System.currentTimeMillis()+1000*60*24))
					.signWith(getSignInKey(),SignatureAlgorithm.HS256)
					.compact();
		}
		
		public boolean isTokenValid(String token,UserDetails userDetails) {
			final String username=extractUsername(token);
			return (username.equals(userDetails.getUsername()))&& !isTokenExpired(token);
		}
		
		private boolean isTokenExpired(String token) {
			return extractExpiration(token).before(new Date());
		}

		private Date extractExpiration(String token) {
			return extractClaim(token,Claims::getExpiration);
		}

		private Claims extractAllClaims(String token) {
			return Jwts.parserBuilder()
					.setSigningKey(getSignInKey())
					.build()
					.parseClaimsJws(token)
					.getBody();
		}
		
		private Key getSignInKey() {
			byte[] keyBytes=Decoders.BASE64.decode(SECRET_KEY);
			return Keys.hmacShaKeyFor(keyBytes);
		}
  
}

// @Service
// public class JwtService {
	
// 	private static final String SECRET_KEY="ca38b39b9b64a7488d728622cc543acfff64c256a0b11d5ba9a9c39e61f19a0c";
	
// 	public String extractUsername(String token) {
// 		return extractClaim(token,Claims::getSubject);
// 	}
	
// 	public <T> T extractClaim(String token,Function<Claims,T> claimsResolver) {
// 		final Claims claims=extractAllClaims(token);
// 		return claimsResolver.apply(claims);
// 	}
	
// 	public String generateToken(UserDetails userDetails) {
// 		return generateToken(new HashMap(),userDetails);
// 	}
	
// 	public String generateToken(
// 		Map<String,Object>extractClaims,
// 		UserDetails userDetails) {
// 		return Jwts.builder()
// 				.setClaims(extractClaims)
// 				.setSubject(userDetails.getUsername())
// 				.setIssuedAt(new Date(System.currentTimeMillis()))
// 				.setExpiration(new Date(System.currentTimeMillis()+1000*60*24))
// 				.signWith(getSignInKey(),SignatureAlgorithm.HS256)
// 				.compact();
// 	}
	
// 	public boolean isTokenValid(String token,UserDetails userDetails) {
// 		final String username=extractUsername(token);
// 		return (username.equals(userDetails.getUsername()))&& !isTokenExpired(token);
// 	}
	
// 	private boolean isTokenExpired(String token) {
// 		return extractExpiration(token).before(new Date());
// 	}

// 	private Date extractExpiration(String token) {
// 		return extractClaim(token,Claims::getExpiration);
// 	}

// 	private Claims extractAllClaims(String token) {
// 		return Jwts.parserBuilder()
// 				.setSigningKey(getSignInKey())
// 				.build()
// 				.parseClaimsJws(token)
// 				.getBody();
// 	}
	
// 	private Key getSignInKey() {
// 		byte[] keyBytes=Decoders.BASE64.decode(SECRET_KEY);
// 		return Keys.hmacShaKeyFor(keyBytes);
// 	}

// }