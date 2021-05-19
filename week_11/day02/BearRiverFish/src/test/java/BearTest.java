import org.junit.Before;
import org.junit.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class BearTest {

    private Bear bear;
    private Salmon salmon;
//    private River river;

    @Before
    public void before() {
        // Creating a bear, salmon and river which has 1 fish.
        bear = new Bear("Paddington");
        salmon = new Salmon();
//        river = new River();
//        river.addFish(salmon);
    }

    @Test
    public void bellyStartsEmpty() {
        assertEquals(0, bear.foodCount());
    }

//    @Test
//    public void canEatSalmon() {
//        bear.eat(salmon);
//        assertEquals(1, bear.foodCount());
//    }
//
//    @Test
//    public void shouldEmptyBellyAfterSleeping(){
//        bear.eat(salmon);
//        bear.sleep();
//        assertEquals(0, bear.foodCount());
//    }


}
