package com.example.codeclan.pirateservice.controller;

import com.example.codeclan.pirateservice.models.Pirate;
import com.example.codeclan.pirateservice.repository.PirateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

@RestController
public class PirateController {
    @Autowired
    PirateRepository pirateRepository;

// Commented out to show the Bad Practice below
//    @GetMapping(value = "/pirates")
//    public ResponseEntity<List<Pirate>> getAllPirates(){
//        return new ResponseEntity<>(pirateRepository.findAll(), HttpStatus.OK);
//    }

    //Fix Me - Try Me
    //Not wrong and Some people do do it this way but Ally thinks not good Practice - checks for first and if not found checks second and so on.
    @GetMapping(value = "/pirates")
    public ResponseEntity<List<Pirate>> getAllPirates(
        @RequestParam(name="minAge", required = false) Integer minAge,
        @RequestParam(name="shipID", required = false) Long shipID)
    {
    if(minAge != null){
        return new ResponseEntity<List<Pirate>>(pirateRepository.findByAgeGreaterThan(minAge), HttpStatus.OK);
     } else if (shipID != null) {
        return new ResponseEntity<List<Pirate>>(pirateRepository.findByShipId(shipID), HttpStatus.OK);
    }
        return new ResponseEntity<>(pirateRepository.findAll(), HttpStatus.OK);
    }

//    @GetMapping(value = "/pirates/{id}")
//    public ResponseEntity getPirate(@PathVariable Long id){
//        return new ResponseEntity<>(pirateRepository.findById(id), HttpStatus.OK);
//    }
//
//    @PostMapping(value = "/pirates")
//    public ResponseEntity<Pirate> postPirate(@RequestBody Pirate pirate){
//        pirateRepository.save(pirate);
//        return new ResponseEntity<>(pirate, HttpStatus.CREATED);
//    }

    }

