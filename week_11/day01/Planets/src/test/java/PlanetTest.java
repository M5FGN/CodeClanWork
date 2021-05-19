import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class PlanetTest {

    @Test
    public void hasName() {
        Planet planet = new Planet("Mars", 908973);
        assertEquals("Mars", planet.getName());
    }

    @Test
    public void hasSize() {
        Planet planet = new Planet("Mars", 908973);
        assertEquals(908973, planet.getSize());
    }

    @Test
    public void hasExploded() {
        Planet planet = new Planet("Mars", 908973);
        assertEquals("Boom! Mars has exploded", planet.explode());
    }

}
