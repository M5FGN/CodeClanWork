package com.codeclan.example.pirateservice_start_point_restcontrollers.repositories;

import com.codeclan.example.pirateservice_start_point_restcontrollers.models.Raid;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RaidRepository extends JpaRepository<Raid, Long> {
}
