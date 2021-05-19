import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class BearTest {

//  Setup
    Bear bear;

    @Before
    public void before() {
        Bear bear = new Bear("Baloo", 25, 95.96);
    }
//  End Setup

    @Test
    public void hasName() {
//        Bear bear = new Bear("Baloo", 25);
        assertEquals("Baloo", bear.getName());
    }

    @Test
    public void hasAge() {
//        Bear bear = new Bear("Baloo", 25);
        assertEquals(25, bear.getAge());
    }

    @Test
    public void hasWeight() {
//        Delta is the margin of error - needed for double datatypes
        assertEquals(95.96, bear.getWeight(),0.0);
    }

    @Test
    public void readyToHibernateifGreaterthan80() {
        assertEquals(true, bear.readyToHibernate());
    }

    @Test
    public void notReadyToHibernateisLessThan80() {
        Bear thinBear = new Bear("Paddington", 12, 65.32);
        assertEquals(false, thinBear.readyToHibernate());
    }



}
