package com.codeclan.example.pirateservice_start_point_restcontrollers.controllers;

import com.codeclan.example.pirateservice_start_point_restcontrollers.models.Raid;
import com.codeclan.example.pirateservice_start_point_restcontrollers.repositories.RaidRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class RaidController {

    @Autowired
    RaidRepository raidRepository;
//
//    @GetMapping(value = "/raids")
//    public List<Raid> getAllRaids(){
//        return raidRepository.findAll();
//    }
//
//    @GetMapping(value = "/raids/{id}")
//    public Optional<Raid> getRaid(@PathVariable Long id){
//        return raidRepository.findById(id);
//    }
//}
// New

    @GetMapping(value = "/raids")
    public ResponseEntity<List<Raid>> getAllRaids() {
        return new ResponseEntity<>(raidRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/raids/{id}")
    public ResponseEntity<Optional<Raid>> getRaid(@PathVariable Long id) {
        return new ResponseEntity<>(raidRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value="/raids")
    public ResponseEntity<Raid> post(@RequestBody Raid raid) {
        raidRepository.save(raid);
        return new ResponseEntity<>(raid, HttpStatus.CREATED);
    }

}
