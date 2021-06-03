package com.example.codeclan.pirateservice;

import com.example.codeclan.pirateservice.models.Pirate;
import com.example.codeclan.pirateservice.models.Raid;
import com.example.codeclan.pirateservice.models.Ship;
import com.example.codeclan.pirateservice.repository.PirateRepository;
import com.example.codeclan.pirateservice.repository.RaidRepository;
import com.example.codeclan.pirateservice.repository.ShipRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class PirateserviceApplicationTests {

	@Autowired
	PirateRepository pirateRepository;

	@Autowired
	ShipRepository shipRepository;

	@Autowired
	RaidRepository raidRepository;

	@Test
	public void contextLoads() {
	}
// Tests not needed as there is a DataLoader.
//	@Test
//	public void createPirateAndShipThenSave(){
//
//		Ship dutchman = new Ship("The Flying Dutchman");
//		shipRepository.save(dutchman);
//		Pirate jack = new Pirate("jack", "sparrow", 32, dutchman);
//		pirateRepository.save(jack);
//	}
//
//	@Test
//	public void createPirateAndRaidThenSave(){
//		Ship dutchman = new Ship("The Flying Dutchman");
//		shipRepository.save(dutchman);
//		Pirate jack = new Pirate("jack", "sparrow", 32, dutchman);
//		pirateRepository.save(jack);
//
//		Raid raid = new Raid("Tortuga", 100);
//		raidRepository.save(raid);
//
//		jack.addRaid(raid);
//		raid.addPirate(jack);
//		raidRepository.save(raid);
//
//	}

	@Test
	public void canFindPiratesOverAge(){
		List<Pirate> foundPirates = pirateRepository.findByAgeGreaterThan(30);
		assertEquals(7, foundPirates.size());
	}

	@Test
	public void canFindRaidsbyLocation() {
		List<Raid> foundRaids = raidRepository.findByLocation("Barbados");
		assertEquals(1, foundRaids.size());
	}

	@Test
	public void canFindPiratesOnGivenRaid() {
		List<Pirate> foundPirates = pirateRepository.findByRaidsId(2L);
	}

		@Test
		public void canFindShipsWithPiratesAged(){
		List<Ship> foundShips = shipRepository.findByPiratesAge(55);
		assertEquals(2, foundShips.size());
	}


	// Fix Me
//	@Test
//	public void canFindShipsWithPiratesAgedSortedByName(){
//		List<Ship> foundShips = shipRepository.findByPiratesAge(55);
//		assertEquals("The Black Pig", foundShips.get(0).getName());
//	}






}
