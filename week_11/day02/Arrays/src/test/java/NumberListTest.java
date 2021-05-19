import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;

import static org.junit.Assert.assertEquals;

public class NumberListTest {

    private NumberList myNumbers;

    @Before
    public void before() {
        // Creating an empty ArrayList - Equivalent of ... list = []
       // ArrayList<Integer> testNumbers = new ArrayList<>();
        myNumbers = new NumberList();
    }

    @Test
    public void hasNumberOfEntries() {
        assertEquals(0, myNumbers.getNumberCount());
    }

    @Test
    public void canAddNumberToList() {
        myNumbers.addNumber(12);
        assertEquals(1, myNumbers.getNumberCount());
    }

//    Commented out until fixed
//    @Test
//    public void getNumberAtIndex() {
//        myNumbers.addNumber(12);
//        assertEquals(12, myNumbers.getNumberCount(0));
//    }

    @Test
    public void canGetTotal(){
        myNumbers.addNumber(3);
        myNumbers.addNumber(5);
        myNumbers.addNumber(7);
        myNumbers.addNumber(9);
        assertEquals(24, myNumbers.getTotal());
    }

}
