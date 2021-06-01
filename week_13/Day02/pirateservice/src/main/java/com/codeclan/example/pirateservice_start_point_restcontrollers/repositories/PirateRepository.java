package com.codeclan.example.pirateservice_start_point_restcontrollers.repositories;

import com.codeclan.example.pirateservice_start_point_restcontrollers.models.Pirate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PirateRepository extends JpaRepository<Pirate, Long> {
}
