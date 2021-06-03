package com.example.codeclan.pirateservice.controller;

import com.example.codeclan.pirateservice.models.Raid;
import com.example.codeclan.pirateservice.models.Ship;
import com.example.codeclan.pirateservice.repository.ShipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ShipController {

    @Autowired
    ShipRepository shipRepository;

    @GetMapping(value = "/ships")
    public ResponseEntity<List<Ship>> getAllShips() {
        return new ResponseEntity<>(shipRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/ships/{id}")
    public ResponseEntity getShip(@PathVariable Long id) {
        return new ResponseEntity<>(shipRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/ships")
    public ResponseEntity<Ship> createShip(@RequestBody Ship ship) {
        shipRepository.save(ship);
        return new ResponseEntity<>(ship, HttpStatus.CREATED);
    }

//    @GetMapping(value="ships/pirates/{age}")


//}
//    @GetMapping(value="/ships/pirates")
//    public ResponseEntity getShipsWithPiratesAge(@PathVariable int age) {
//        List<Ship> foundShips = shipRepository.findByPiratesAge((age));
//        return new ResponseEntity(foundShips, HttpStatus.OK);    }


// To get http://localhost:8080/ships/pirates?age=55 type URL

    @GetMapping(value = "/ships/pirates")
    public ResponseEntity getShipsWithPiratesAge(@RequestParam(name="age") int age) {
        List<Ship> foundShips = shipRepository.findByPiratesAge((age));
        return new ResponseEntity(foundShips, HttpStatus.OK);
    }
}