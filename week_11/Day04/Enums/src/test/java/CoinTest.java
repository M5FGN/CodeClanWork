import jdk.jfr.StackTrace;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CoinTest {

    // Set up the variable
    private Coin coin;

    @Before
    public void before() {
        coin = new Coin(CoinDenomination.DIME);
    }

    @Test
    public void canGetDenomination_Dime() {
        assertEquals( CoinDenomination.DIME, coin.getDenomination());
    }

    @Test
    public void canGetDenomination_Nickle() {
        coin = new Coin(CoinDenomination.PENNY);
        assertEquals( CoinDenomination.PENNY, coin.getDenomination());
    }

    @Test
    public void getCoinValue() {
        assertEquals(10, getValueFromEnum());
    }


//    @Test
//    public void coinCanBeMisSpelled() {
//        coin = new Coin("Diiime");
//        assertEquals("Diiime", coin.getDenomination());
//    }
//
//    @Test
//    public void coinCanBeMisSpelled() {
//        coin = new Coin("Banana");
//        assertEquals("Banana", coin.getDenomination());
//    }
}
