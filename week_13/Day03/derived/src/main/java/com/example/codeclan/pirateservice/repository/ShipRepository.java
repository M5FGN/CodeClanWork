package com.example.codeclan.pirateservice.repository;

import com.example.codeclan.pirateservice.models.Pirate;
import com.example.codeclan.pirateservice.models.Ship;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShipRepository extends JpaRepository<Ship, Long>  {

    // Find all ships with pirates of a given age
    List<Ship> findByPiratesAge(int Age);

    List<Ship> findByPiratesAgeOrderByName(int Age);
}
