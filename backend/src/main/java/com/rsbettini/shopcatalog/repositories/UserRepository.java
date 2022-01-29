package com.rsbettini.shopcatalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rsbettini.shopcatalog.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}
