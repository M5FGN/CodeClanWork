import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class SheepTest {

    Sheep sheep;

    @Before
    public void setUp() {
        sheep = new Sheep("sheep");
    }

    @Test
    public void hasSpecies(){
        assertEquals("sheep", sheep.getSpecies());
    }

    @Test
    public void makesANoise(){
        assertEquals("baa",sheep.makeANoise());
    }

    @Test
    public void introducesItself() {
        assertEquals("Hi, I am a sheep, baa baa!", sheep.introduceYourself("sheep", "baa"));
    }
}
