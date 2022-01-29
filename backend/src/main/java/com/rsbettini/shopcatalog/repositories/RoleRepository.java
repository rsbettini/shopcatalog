package com.rsbettini.shopcatalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rsbettini.shopcatalog.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long>{

}
