package com.ecommerce.site.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.site.model.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {
}

