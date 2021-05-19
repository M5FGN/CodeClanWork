import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class HorseTest {

    Horse horse;

    @Before
    public void setUp() {
        horse = new Horse("horse", "pony");
    }

    @Test
    public void hasSpecies(){
        assertEquals("horse", horse.getSpecies());
    }

    @Test
    public void makesANoise(){
        assertEquals("neigh", horse.makeANoise());
    }

    @Test
    public void introducesItself() {
        assertEquals("Hi, I am a horse from the pony family, neigh neigh!", horse.introduceYourself("horse", "pony", "neigh" ));
    }
}
