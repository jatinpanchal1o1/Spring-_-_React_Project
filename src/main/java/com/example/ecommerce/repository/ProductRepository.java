package com.example.ecommerce.repository;


import com.example.ecommerce.model.*;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {}
