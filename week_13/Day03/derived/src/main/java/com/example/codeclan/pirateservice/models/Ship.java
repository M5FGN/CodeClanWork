package com.example.codeclan.pirateservice.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "ships")

public class Ship {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    // Adding a ENUM
    @Column(name = "type")
    // Will store String for Enum
    @Enumerated(value = EnumType.STRING)
    // Will store ordinal number for Enum
//    @Enumerated(value = EnumType.ORDINAL)
    private ShipType shipType;

    @JsonBackReference
    @OneToMany(mappedBy = "ship", fetch = FetchType.LAZY)
    private List<Pirate> pirates;

    public Ship(String name, ShipType shipType) {
        this.name = name;
        this.shipType = shipType;
    }

    public Ship() {
    }

    public String getName() {
        return name;
    }

    public ShipType getShipType() {
        return shipType;
    }

    public void setShipType(ShipType shipType) {
        this.shipType = shipType;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Pirate> getPirates() {
        return pirates;
    }

    public void setPirates(List<Pirate> pirates) {
        this.pirates = pirates;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
