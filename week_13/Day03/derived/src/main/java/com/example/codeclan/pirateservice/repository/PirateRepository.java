package com.example.codeclan.pirateservice.repository;

import com.example.codeclan.pirateservice.models.Pirate;
import com.example.codeclan.pirateservice.models.Ship;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PirateRepository extends JpaRepository<Pirate, Long> {

//    Finds those equal to given age
//    Pattern is important as Spring will pattern match to know what to query.
    List<Pirate> findByAge(int Age);

//    Finds those with age greater than given age
    List<Pirate> findByAgeGreaterThan(int Age);

    //Find all pirates for a given raid(id)
    List<Pirate> findByRaidsId(Long id);

    List<Pirate> findByShipId(Long id);


}
