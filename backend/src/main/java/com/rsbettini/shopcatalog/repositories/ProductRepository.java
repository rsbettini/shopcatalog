package com.rsbettini.shopcatalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rsbettini.shopcatalog.entities.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{

}
